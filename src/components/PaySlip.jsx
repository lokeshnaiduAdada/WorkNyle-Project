

const PaySlip = () => {

    const paySlipData = [
        {
            empCode: "KD150",
            name: "Rajinikanth",
            year: 2024,
            month: "September"
        },
        {
            empCode: "KD151",
            name: "Kamal Haasan",
            year: 2024,
            month: "September"
        }
    ];

    return (
        <div>
            <div className="heading-bar">
                <p className="main-heading m-2 ml-4">Payslip</p>
            </div>
            <div className="pl-2 pt-4 pr-2 pb-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <label htmlFor="mrNo" className="leave-card-heading">Search</label>
                            <input type="text" id="mrNo" name="mrNo" className="form-control" placeholder="Emp code/ Name"
                                 maxLength="10" />
                        </div>
                        <div className="col-12 col-md-2 d-flex button-top-padding">
                            <select className="form-control" style={{ appearance: "auto" }}>
                                <option>Month</option>
                            </select>
                            <select className="form-control" style={{ appearance: "auto" }}>
                                <option>Year</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-3 button-top-padding">
                            <button className="form-button mr-3">Save</button>
                            <button className="form-button2">Reset</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="list-employee-table">
                                    <thead>
                                        <tr>
                                            <th>Emp Code</th>
                                            <th>Name</th>
                                            <th>Year</th>
                                            <th>Month</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody id="paySlipTableBody">
                                        {/*<!-- Dynamic Rows Will Be Inserted Here -->*/}
                                        {
                                            paySlipData.map((element, index) => {
                                                return (
                                                    <tr className="tablebody" key={index}>
                                                        <td>{element.empCode}</td>
                                                        <td>{element.name}</td>
                                                        <td>{element.year}</td>
                                                        <td>{element.month}</td>
                                                        <td className="actions">
                                                            <i className="far fa-eye" title="View"></i>
                                                            <i className="fas fa-download" title="Download"></i>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaySlip;