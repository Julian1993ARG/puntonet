﻿using Microsoft.AspNetCore.Mvc;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using System.Globalization;
using MyRow = Puntonet.Parameters.AtributesRow;

namespace Puntonet.Parameters.Endpoints
{
    [Route("Services/Parameters/Atributes/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class AtributesEndpoint : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] IAtributesSaveHandler handler)
        {
            return handler.Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
            [FromServices] IAtributesSaveHandler handler)
        {
            return handler.Update(uow, request);
        }
     
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
            [FromServices] IAtributesDeleteHandler handler)
        {
            return handler.Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
            [FromServices] IAtributesRetrieveHandler handler)
        {
            return handler.Retrieve(connection, request);
        }

        [HttpPost, AuthorizeList(typeof(MyRow))]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
            [FromServices] IAtributesListHandler handler)
        {
            return handler.List(connection, request);
        }

        [HttpPost, AuthorizeList(typeof(MyRow))]
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
            [FromServices] IAtributesListHandler handler,
            [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request, handler).Entities;
            var bytes = exporter.Export(data, typeof(Columns.AtributesColumns), request.ExportColumns);
            return ExcelContentResult.Create(bytes, "AtributesList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
        }
    }
}