<%@ Control Language="c#" AutoEventWireup="True" Codebehind="ManagerAlternateView.ascx.cs" Inherits="Portlet.TimecardApproval.Admin.ManagerAlternateView" %>
<%@ Register TagPrefix="common" Namespace="Jenzabar.Common.Web.UI.Controls" Assembly="Jenzabar.Common" %>
<%@ Register TagPrefix="framework" Namespace="Jenzabar.Portal.Framework.Web.UI.Controls" Assembly="Jenzabar.Portal.Framework.Web" %>
<%@ Register TagPrefix="approval" Namespace="Portlet.TimecardApproval.Utils" Assembly="Portlet.TimecardApproval" %>

<common:Subheader ID="PageHeader" TextKey="TXT_ADD_ALTERNATE_APPROVERS_FOR_A_MANAGER" runat="server" />
<div id="MainSection" class="pSection" runat="server">
	<table width="99%" cellpadding="0" cellspacing="0">
	<tr>
	    <td class="tcaAltApproversByGroupHeader">
			<common:GlobalizedLiteral ID="AddApproversHeader" TextKey="TXT_ADD_ALTERNATE_APPROVERS_FOR_A_MANAGER" runat="server" />
		</td>
	</tr>
	<tr>
	    <td>
	    <table width="100%" cellpadding="8" cellspacing="0" border="0" class="tcaAltApproversByGroupBlueBorder">
	        <tr class="tcaAltApproversByGroupBodyRow">
	            <td colspan="2">
					<framework:PortalImage ID="AlternateApprovalIcon" ImageCategory="PortletIcon" ImageUrl="supervisor-alt-app-icon.gif" 
							CssClass="tcaFloatLeft" runat="server" /><common:GlobalizedLiteral id="glitAltApproverDescription" 
							TextKey="MSG_TCAPPROVAL_ALTERNATE_APPROVER_MANAGER_DESCRIPTION" runat="server" />
				</td>
	        </tr>
	        <tr class="tcaAltApproversByGroupBodyRow">
	            <td align="center" width="50%">
					<common:GlobalizedLiteral ID="ManagerHeader" TextKey="TXT_MANAGER" runat="server" /><br />
					<hr width="85%" />
				</td>
	            <td align="center" width="50%">
					<common:GlobalizedLiteral ID="AltApproverHeader" TextKey="TXT_ALTERNATE_APPROVERS" runat="server" /><br />
					<hr width="85%" />
				</td>
	        </tr>
	        <tr class="tcaAltApproversByGroupBodyRow">
	            <td align="center">
	            <asp:Repeater ID="rptManager" runat="server">
	            <HeaderTemplate>
	                <table width="85%">
	            </HeaderTemplate>
	            <ItemTemplate>
	            	<tr>
	                    <td>
	                        <asp:checkbox ID="cbManager" runat="server" AutoPostBack="true" />
	                        <asp:Literal ID="litManager" runat="server" Visible="false" />
	                    </td>
	                </tr>
	            </ItemTemplate>
	            <FooterTemplate>
	                </table>
	            </FooterTemplate>
	            </asp:Repeater>
	            </td>
	            <td><approval:TCAPrincipalSelector id="psUsers" runat="server" /></td>
	        </tr>
	        <tr>
	            <td colspan="2" class="tcaAltApproversByGroupButtonRow" align="center">
					<common:GlobalizedButton ID="btnSaveApprovers" TextKey="TXT_SAVE_APPROVERS" runat="server" />
					<common:GlobalizedButton ID="btnCancel" TextKey="TXT_CANCEL" runat="server" />
				</td>
	        </tr>
	    </table>
	    </td>
	</tr>
	   <tr>
            <td>
                <common:GlobalizedLinkButton id="BackButton" runat="server" TextKey="TXT_BACK_TO_ALTERNATE_APPROVERS" />
            </td>
        </tr>
    </table>
</div>
