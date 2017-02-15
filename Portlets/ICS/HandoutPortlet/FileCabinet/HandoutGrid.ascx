<%@ Control Language="c#" AutoEventWireup="false" Codebehind="HandoutGrid.ascx.cs" Inherits="Jenzabar.ICS.Web.Portlets.HandoutPortlet.HandoutGrid" TargetSchema="http://schemas.microsoft.com/intellisense/ie5"%>
<%@ Register TagPrefix="Common" Namespace="Jenzabar.Common.Web.UI.Controls" Assembly="Jenzabar.Common" %>

<asp:GridView runat="server" id="ggMain" CssClass="assignmentGrid itemHover" AlternatingRowStyle-CssClass="altAssignmentGrid" HeaderStyle-CssClass="headerAssignmentGrid"  CellPadding="0" CellSpacing="0" AutoGenerateColumns="False">
    <Columns>
        <asp:TemplateField>
            <HeaderTemplate>
                <input type="checkbox" id="chkSelectAll" />
            </HeaderTemplate>
            <ItemTemplate>
                <input type="checkbox" id="chkSelect" runat="server" />
            </ItemTemplate>
        </asp:TemplateField>
        <asp:TemplateField></asp:TemplateField>
        <asp:TemplateField>
            <ItemTemplate>
                <%# this.GetEmptyStringOrEvaluateField(Container.DataItem, "Created", "{0:d}", typeof(DateTime))%>
            </ItemTemplate>
        </asp:TemplateField>
        <asp:TemplateField>
            <ItemTemplate>
                <%# this.GetEmptyStringOrFileType(Container.DataItem)%>
            </ItemTemplate>
        </asp:TemplateField>
    </Columns>
    <EmptyDataTemplate>
        <div style="margin:20px;">
            <div>There are no handouts in this folder.</div>
        </div>
    </EmptyDataTemplate>
</asp:GridView>

<script type="text/javascript" language="javascript">
    var chkSelectAll = document.getElementById("chkSelectAll");
    jQuery(chkSelectAll).click
    (
        function()
        {
            jQuery("table[id$='ggMain'] tbody tr td input[type='checkbox']").each
            (
                function()
                {
                    if (this == chkSelectAll) return;
                    this.checked = chkSelectAll.checked;
                }
            );
        }
    );
</script>