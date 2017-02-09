create procedure [dbo].[todo_sp_update]
 @Id int,
 @Text varchar(255),
 @IsCompleted bit 

as
begin

 update [dbo].[Todo] set
 [Text] = @Text,
 [IsCompleted] = @IsCompleted
 where [Id] = @Id
end 