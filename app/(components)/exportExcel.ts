import writeXlsxFile from 'write-excel-file'

export const exportExcel = async (objects: any) => {
    console.log(">>>info", objects)

    const schema = [
        {
            column: "ID",
            type: Number,
            value: (student: number|string) => student.id
        },
        {
            column: "NOMBRE",
            type:  String,
            value: (student: string) => student.name
        },
        {
            column: "EMAIL",
            type:  String,
            value: (student: string) => student.email
        },
        {
            column: "DIRECCION",
            type:  String,
            value: (student:string) => student.address.street
        },
        {
            column: "CIUDAD",
            type:  String,
            value: (student:string) => student.address.city
        },
        {
            column: "TELEFONO",
            type:  String,
            value: (student: string) => student.phone
        },
        {
            column: "WEBSITE",
            type:  String,
            value: (student: string) => student.website
        },
        {
            column: "EMPRESA",
            type:  String,
            value: (student:string) => student.company.name
        },
    ]

    await writeXlsxFile(
        objects, {
        schema,
        fileName: 'file.xlsx'
    })

}