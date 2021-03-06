﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ReportWindow.aspx.cs" Inherits="Jenzabar.ContainedForm.Views.ReportWindow" %>
<%@ Import Namespace="Jenzabar.Portal.Framework.InstalledApplications" %>
<%@ Import Namespace="Jenzabar.ContainedForm.Helpers" %>
<%@ Register TagPrefix="jics" TagName="CustomBody" Src="~/ClientConfig/Controls/CustomBody.ascx" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
    <% if (new Jenzabar.Portal.Framework.InstalledApplications.InstalledApplicationService().IsApplicationAtLeastThisVersion(Jenzabar.Portal.Framework.InstalledApplications.InstalledApplicationNames.Jics, "8.4")) { %>
        <script type="text/javascript" src='<%= ResolveUrl("~/UI/Common/Scripts/site-bundle.js") %>'></script>
    <% } else { %>
        <script type="text/javascript" src='<%= ResolveUrl("~/UI/Common/Scripts/bundle_siteJS") %>'></script>
    <% } %>
</head>
<body runat="server" id="body" class="pt_JenzContainedForm reportView">
    <asp:PlaceHolder ID="scrpts" runat="server">
        <script type="text/javascript" src='<%= ResolveUrl("~/Portlets/CUS/ICS/Jenzabar.ContainedForm/Scripts/commonScripts.js?v=" + new InstalledApplicationService().GetApplicationVersion(FormResources.ApplicationName)) %>'></script>
        <script type="text/javascript" src='<%= ResolveUrl("~/Portlets/CUS/ICS/Jenzabar.ContainedForm/Scripts/formViewScripts.js?v=" + new InstalledApplicationService().GetApplicationVersion(FormResources.ApplicationName)) %>'></script>
        <script>
            jQuery(document).ready(function () {
                var tabs = jQuery('.formTabs').tabs();
                if (tabs.hasClass('jcf-vertical-tabs')) {
                    tabs.addClass("ui-tabs-vertical ui-helper-clearfix");
                    jQuery('li', tabs).removeClass("ui-corner-top").addClass("ui-corner-left");
                }

                var currentTab = getUrlParameter("tab");
                if (currentTab != null && currentTab != '')
                    SelectTab(currentTab);

                if (jQuery('[id*="_hdnUnanswered"]').val() != '') {
                    var items = JSON.parse(jQuery('[id*="_hdnUnanswered"]').val());

                    for (var x in items) {
                        jQuery('[itemid="' + items[x] + '"]').addClass('required');
                    }
                }

                if (jQuery('[id*=hdn_requiredQuestions]').length > 0) {
                    var reqField = jQuery('[id*=hdn_requiredQuestions]').val();
                    var req = (reqField).split(';');
                    for (var x in req) {
                        if (req[x] != null && req[x] != '') {
                            if (jQuery('.reqIndicator', '[itemgroup=' + req[x] + ']').length == 0) {
                                jQuery('[piece=label]', '[itemgroup=' + req[x] + ']').prepend('<span class=\'reqIndicator\'>*</span>');
                            }
                        }
                    }
                }
            });
        </script>
        <script type="text/javascript" src='<%= ResolveUrl("~/Portlets/CUS/ICS/Jenzabar.ContainedForm/Scripts/generatedScripts.ashx?v=" + new InstalledApplicationService().GetApplicationVersion(FormResources.ApplicationName) + "&formId=" + FormId) %>'></script>
    </asp:PlaceHolder>
   
    <link rel="stylesheet" type="text/css" href='<%= ResolveUrl("~/UI/Common/Styles/jQuery/jquery-ui.custom.css") %>'/>
    <link type="text/css" rel="stylesheet" href='<%= ResolveUrl("~/Portlets/CUS/ICS/Jenzabar.ContainedForm/Styles/ContainedFormStyles.css") %>' />
    <link type="text/css" rel="stylesheet" href='<%= ResolveUrl("~/ClientConfig/HtmlContent/custom.css") %>' />
    <script>
        jQuery(document).ready(function () {
            jQuery('.formTabs ul:first li').each(function () {
                var id = jQuery('a', this).attr('data-tabid');
                var href = jQuery('a', this).attr('href');
                var newid = jQuery('.formTabs div[id*=' + id + ']').attr('id');
                jQuery('a', this).attr('href', href.replace('Tab' + id, newid));
            });

            jQuery('.formTabs').tabs({
                active: jQuery('[id*=hdnCurrentTab]').val(),
                activate: function (event, ui) {
                    jQuery('[id*=hdnCurrentTab]').val(ui.newTab.find('a').attr('data-tabid'));
                }
            });

            var index = $("[id*=formTabs] ul li").index($('[data-tabid*=' + $('[id*=hdnCurrentTab]').val() + ']').parent());
            if ($('[id*=hdnCurrentTab]').val() == '0')
                index = 0;

            jQuery('[id*=formTabs]').tabs({ active: index });

            if (jQuery('[id*="_hdnUnanswered"]').val() != '') {
                var items = JSON.parse(jQuery('[id*="_hdnUnanswered"]').val());

                for (var x in items) {
                    jQuery('[itemid="' + items[x] + '"]').addClass('required');
                }
            }
        });
    </script>
    <form id="form1" runat="server">
        <asp:ScriptManager ID="ScriptManager" runat="server" />
        <asp:HiddenField runat="server" ID="hdnCurrentTab" Value="0"/>
        <asp:HiddenField ID="_hdnUnanswered" runat="server" />
        <asp:Panel ID="_pnlReport" runat="server"></asp:Panel>
        <jics:CustomBody ID="customBody" runat="server" />
    </form>
</body>
</html>
