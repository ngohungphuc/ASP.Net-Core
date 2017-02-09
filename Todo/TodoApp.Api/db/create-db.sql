Create database TodoAppDb
use TodoAppDb
Create table [dbo].[Todo](
	[Id] int not null identity,
	[Text] varchar(255) not null,
	[IsCompleted] bit not null,
	Constraint PK_Todo Primary key([Id])
)