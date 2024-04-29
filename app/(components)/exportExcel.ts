import writeXlsxFile from 'write-excel-file'

export const exportExcel = async (objects: any) => {
    const schema = [
        {
            column: "ID",
            type: Number,
            value: (student: any) => student.id
        },
        {
            column: "NOMBRE",
            type:  String,
            value: (student: any) => student.name
        },
        {
            column: "EMAIL",
            type:  String,
            value: (student: any) => student.email
        },
        {
            column: "DIRECCION",
            type:  String,
            value: (student:any) => student.address.street
        },
        {
            column: "CIUDAD",
            type:  String,
            value: (student:any) => student.address.city
        },
        {
            column: "TELEFONO",
            type:  String,
            value: (student: any) => student.phone
        },
        {
            column: "WEBSITE",
            type:  String,
            value: (student: any) => student.website
        },
        {
            column: "EMPRESA",
            type:  String,
            value: (student:any) => student.company.name
        },
    ]

    await writeXlsxFile(
        objects, {
        schema,
        fileName: 'file.xlsx'
    })

}