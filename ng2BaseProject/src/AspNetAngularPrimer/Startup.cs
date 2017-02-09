using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore;
using StructureMap;
using AspNetAngularPrimer.Data;

namespace AspNetAngularPrimer
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile(Path.Combine(env.ContentRootPath, "appsettings.json"))
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }


        public IConfigurationRoot Configuration { get; set; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddEntityFramework()
                .AddDbContext<PrimerContext>(config =>
                {
                    config.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]);
                });

            var container = new Container();
            container.Configure(config =>
            {
                config.Scan(scanner =>
                {
                    scanner.WithDefaultConventions();
                    scanner.AssemblyContainingType(typeof(Startup));
                });
                config.Populate(services);
            });
            return container.GetInstance<IServiceProvider>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseMvc(config =>
            {

                config.MapRoute("AngularDeepLinkingRoute", "{*url}",
                    new { controller = "Home", action = "Index" });
            });


            using (var ctxt = app.ApplicationServices.GetService<PrimerContext>())
            {
                ctxt.Database.Migrate();
            }
        }
    }
}
