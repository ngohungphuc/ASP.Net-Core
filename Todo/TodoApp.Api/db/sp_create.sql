create procedure [dbo].[todo_sp_create]
 @Text varchar(255),
 @IsCompleted bit 

as
begin
 set nocount on;
 insert into [dbo].[Todo]([Text],[IsCompleted])
 output inserted.Id
 values (@Text,@IsCompleted)
end 