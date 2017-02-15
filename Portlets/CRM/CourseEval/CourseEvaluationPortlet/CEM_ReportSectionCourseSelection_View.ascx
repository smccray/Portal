<%@ Control Language="c#" AutoEventWireup="false" Codebehind="CEM_ReportSectionCourseSelection_View.ascx.cs" Inherits="Jenzabar.CRM.Web.Portlets.CourseEvaluationPortlet.CEM_ReportSectionCourseSelection_View" TargetSchema="http://schemas.microsoft.com/intellisense/ie5"%>
<input type="hidden" name="AllowPostback" value="true" />
<div class="pSection">
	<table>
		<tr>
			<td>
				<asp:Label ID="lblInstructions" Runat="server">Select a course from the below dropdown.</asp:Label>
			</td>
		</tr>
		<tr>
			<td>
				<asp:DropDownList ID="ddlChooseCourse" Runat="server" />
			</td>
		</tr>
		<tr>
			<td>
				<asp:Button ID="btnSelect" Runat="server" />
				&nbsp;
				<asp:Button ID="btnCancel" Runat="server" />
			</td>
		</tr>
		<tr>
			<td>
				<asp:LinkButton ID="lnkExportToRTF" Runat="server" />
			</td>
		</tr>
		<tr>
			<td>
				<asp:LinkButton ID="lnkExportToCSV" Runat="server" />
			</td>
		</tr>
	</table>
</div>
