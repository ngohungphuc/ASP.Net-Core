create procedure [dbo].[todo_sp_list]
 @Id int = null,
 @Text varchar(255) = null,
 @IsCompleted bit = null

as
begin

 select [Id], [Text], [IsCompleted] from [dbo].[Todo]
 where
 [Id]=ISNULL(@Id,[Id]) and
 [Text]=ISNULL(@Text,[Text]) and
 [IsCompleted]=ISNULL(@IsCompleted,[IsCompleted])
end 