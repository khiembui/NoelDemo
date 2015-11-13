namespace Opin.common
{
    using System;
    using System.Collections;
    using System.Collections.Generic;

    using AutoMapper;

    /// <summary>
    /// The auto mapper extensions.
    /// </summary>
    public static class AutoMapperExtensions
    {
        /// <summary>
        /// The map to.
        /// </summary>
        /// <param name="self">
        /// The self.
        /// </param>
        /// <typeparam name="TResult">
        /// the result
        /// </typeparam>
        /// <returns>
        /// The list.
        /// </returns>
        public static List<TResult> MapTo<TResult>(this IEnumerable self)
        {
            if (self == null)
            {
                throw new ArgumentNullException();
            }

            return (List<TResult>)Mapper.Map(self, self.GetType(), typeof(List<TResult>));
        }

        /// <summary>
        /// The map to.
        /// </summary>
        /// <param name="self">
        /// The self.
        /// </param>
        /// <typeparam name="TResult">
        /// the result
        /// </typeparam>
        /// <returns>
        /// The <see cref="TResult"/>.
        /// </returns>
        public static TResult MapTo<TResult>(this object self)
        {
            if (self == null)
            {
                throw new ArgumentNullException();
            }

            return (TResult)Mapper.Map(self, self.GetType(), typeof(TResult));
        }
    }
}
