create procedure [dbo].[todo_sp_get]
 @Id int 

as
begin

 select [Id],[Text],[IsCompleted] from [dbo].[Todo]
 where
 [Id] = @Id
end 