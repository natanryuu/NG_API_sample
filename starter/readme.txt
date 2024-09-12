Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned


### mod02-lab02-step10

幫我產生樣式區塊
1.	container 的高度是 100%
2.	包含三個區塊是垂直排列
3.	header , footer 內容置中，背景為淺灰色
4.	header:content:footer 是 1: 8.5: 0.5


### Visual Studio Code常用快速鍵 (Windows)
•	Alt + \ ：Inline suggestion要求建議
•	CTRL + I ：inline chat視窗
•	Tab：接受建議
•	Esc：拒絕建議
•	Ctrl + Enter：打開Copilot單獨視窗，最多顯示10個建議
•	Ctrl +  ：接受一個字建議
•	Alt + ]：下一條建議
•	Alt + [：上一條建議
•	CTRL+SHIFT+I


### 安裝 EntityFrameworkCore 相關套件

dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Microsoft.EntityFrameworkCore.Design  

dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet tool install -g dotnet-aspnet-codegenerator

dotnet build
dotnet aspnet-codegenerator controller -name MeetingRoomsController -async -api -m MeetingRoom -dc MeetingRoomContext -outDir Controllers
