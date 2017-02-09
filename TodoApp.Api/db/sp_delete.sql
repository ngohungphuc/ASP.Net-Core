create procedure [dbo].[todo_sp_delete]
 @Id int 

as
begin

 delete from [dbo].[Todo]
 where
 [Id] = @Id
end 