namespace Opin.web.IoC
{
    using System.Reflection;
    using System.Web.Http;

    using Autofac;
    using Autofac.Integration.WebApi;

    /// <summary>
    /// The auto factory builder.
    /// </summary>
    public class AutoFacBuilder
    {
        /// <summary>
        /// The register io c builder.
        /// </summary>
        public static void RegisterIoCBuilder()
        {
            var builder = new ContainerBuilder();

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            IContainer container = builder.Build();
            var resolver = new AutofacWebApiDependencyResolver(container);
            GlobalConfiguration.Configuration.DependencyResolver = resolver;
        }
    }
}