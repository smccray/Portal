<%@ Register TagPrefix="jenzabar" assembly="Jenzabar.Common" namespace="Jenzabar.Common.Web.UI.Controls" %>
<%@ Control Language="c#" AutoEventWireup="false" Codebehind="Main_View.ascx.cs" Inherits="Jenzabar.ICS.Web.Portlets.ForumPortlet.Main_View" TargetSchema="http://schemas.microsoft.com/intellisense/ie5"%>
<%@ Import namespace="Jenzabar.Portal.Framework.Web.Configuration" %>

<div class="pSection">
	<jenzabar:groupedgrid id=TopicGrid runat="server" CellPadding="0" DataKeyField="ID" GroupKeyField="ID" RenderGroupHeaders="true">
		<GroupHeaderTemplate>
					<%# DataBinder.Eval( Container.DataItem, "Label" )%>
					<asp:ImageButton ID="AddTopicLink" CommandName="AddTopic" Runat="server" />			
					<asp:ImageButton ID="EditCategoryLink" CommandName="EditCategory" Runat="server" />
					<asp:ImageButton ID="DeleteCategoryLink" CommandName="DeleteCategory" Runat="server" />		
		</GroupHeaderTemplate>
		<GroupSubHeaderTemplate>
			<%# DataBinder.Eval( Container.DataItem, "Description" )%>
		</GroupSubHeaderTemplate>
		<GroupHeaderColumns>
			<jenzabar:ExpandCollapseGroupedGridColumn separatorbefore="true"></jenzabar:ExpandCollapseGroupedGridColumn>
		</GroupHeaderColumns>
		<Columns>
			<asp:TemplateColumn HeaderText="Name" SortExpression="Message.Name">
				<ItemTemplate>
					<asp:LinkButton ID="ViewLink" CommandName="ViewTopic" Runat="server" ><img src="<%= this.ResolveUrl(Settings.Current.PortletIconImagesPath) + "folder.gif" %>" style="margin-right: 7px" alt="folder"><%# DataBinder.Eval( Container.DataItem, "Name" )%></asp:LinkButton>		
					<asp:ImageButton ID="EditLink" CommandName="EditTopic" Runat="server" />		
					<asp:ImageButton ID="DeleteLink" CommandName="DeleteTopic" Runat="server" />
					<br>
					<%# DataBinder.Eval( Container.DataItem, "Description" )%>				
				</ItemTemplate>
			</asp:TemplateColumn>
			<asp:TemplateColumn HeaderText="Threads" ItemStyle-HorizontalAlign="Center" SortExpression="Threads desc, LastPost desc">
				<ItemTemplate>
					<%# DataBinder.Eval( Container.DataItem, "ThreadCount" ).ToString()%>
				</ItemTemplate>
			</asp:TemplateColumn>
			<asp:TemplateColumn HeaderText="Messages" ItemStyle-HorizontalAlign="Center" SortExpression="Messages desc, LastPost desc">
				<ItemTemplate>
					<%# DataBinder.Eval( Container.DataItem, "MessageCount" ).ToString()%>
				</ItemTemplate>
			</asp:TemplateColumn>
			<asp:TemplateColumn HeaderText="Last Message" SortExpression="LastPost desc">
				<ItemTemplate>
					<%# DataBinder.Eval( Container.DataItem, "LastPost" ).ToString()%>
				</ItemTemplate>
			</asp:TemplateColumn>
		</Columns>
	</jenzabar:groupedgrid>
</div>
