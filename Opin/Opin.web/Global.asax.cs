namespace Opin.web
{
    using System.Web;
    using System.Web.Http;
    using System.Web.Mvc;
    
    using kalibrate.web.MapperProfile;
    
    using Opin.web.IoC;

    /// <summary>
    /// The web application.
    /// </summary>
    public class WebApiApplication : HttpApplication
    {
        /// <summary>
        /// The application_ start.
        /// </summary>
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            ConfigMapperProfile.RegisterConfig();
            AutoFacBuilder.RegisterIoCBuilder();
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
        }
    }
}