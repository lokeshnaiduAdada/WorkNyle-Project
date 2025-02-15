import { useContext } from "react";
import Header from "./Header"
import LeftSideBar from "./LeftSideBar"
import { UserContext } from "../Context/UserContext";

const ListPurchase = () => {

    const { showmenu } = useContext(UserContext);

    return (
        <>
            <Header />
            {showmenu && <LeftSideBar/>}
            <div style={{ paddingTop: "5rem", marginLeft: showmenu ? '130px' : '0px' } }>
            <div className="heading-bar">
                <p className="main-heading m-2 ml-4">List Purchases</p>
            </div>
            <div className="p-4">
                <div className="container-fluid">
                    <div className="row">
                        <table className="col-12 list-purchase-table" style={{ borderStyle: "none" }}>
                            <thead>
                                <tr >
                                    <th>SNO</th>
                                    <th>BRAND</th>
                                    <th>PURCHASED ON</th>
                                    <th>AMOUNT</th>
                                    <th>DISPLAY</th>
                                    <th>RAM</th>
                                    <th>STORAGE</th>
                                    <th>PROCESSOR</th>
                                    <th>OS</th>
                                    <th>GRAPHICS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="tablebody">
                                    <td>1</td>
                                    <td>DELL - Inspiron 3536</td>
                                    <td>10-MAY-2024</td>
                                    <td>₹ 1,00,000</td>
                                    <td>15.6 Inch</td>
                                    <td>16 GB</td>
                                    <td>512 GB SSD</td>
                                    <td>Intel Core i5-1235U</td>
                                    <td>Windows</td>
                                    <td>Intel® UHD Graphics</td>
                                </tr>
                                <tr className="tablebody">
                                    <td>2</td>
                                    <td>HP-15s</td>
                                    <td>16-JUNE-2024</td>
                                    <td>₹ 42,990</td>
                                    <td>15.6 Inch</td>
                                    <td>16 GB</td>
                                    <td>512 GB SSD</td>
                                    <td>Ryzen 5-5500U</td>
                                    <td>Windows</td>
                                    <td>AMD Radeon</td>
                                </tr >
                                <tr className="tablebody">
                                    <td>3</td>
                                    <td>ASUS-VivoBook 15</td>
                                    <td>10-MAY-2024</td>
                                    <td>₹ 20,990</td>
                                    <td>15.6 Inch</td>
                                    <td>16 GB</td>
                                    <td>256 GB SSD</td>
                                    <td>Dual Core Intel Celeron N4020</td>
                                    <td>Windows</td>
                                    <td>Intel® UHD Graphics</td>
                                </tr>
                                <tr className="tablebody">
                                    <td>4</td>
                                    <td>DELL-15</td>
                                    <td>10-MAY-2024</td>
                                    <td>₹ 45,990</td>
                                    <td>14.0 Inch</td>
                                    <td>8 GB</td>
                                    <td>512 GB SSD</td>
                                    <td>Intel 12th Gen Core i5-1235U</td>
                                    <td>Windows</td>
                                    <td>Intel UHD Graphics</td>
                                </tr>
                                <tr className="tablebody">
                                    <td>5</td>
                                    <td>DELL - Inspiron 3536</td>
                                    <td>10-MAY-2024</td>
                                    <td>₹ 1,00,000</td>
                                    <td>15.6 Inch</td>
                                    <td>16 GB</td>
                                    <td>512 GB SSD</td>
                                    <td>Intel Core i5-1235U</td>
                                    <td>Windows</td>
                                    <td>Intel® UHD Graphics</td>
                                </tr>
                                <tr className="tablebody">
                                    <td>6</td>
                                    <td>HP-15s</td>
                                    <td>16-JUNE-2024</td>
                                    <td>₹ 42,990</td>
                                    <td>15.6 Inch</td>
                                    <td>16 GB</td>
                                    <td>512 GB SSD</td>
                                    <td>Ryzen 5-5500U</td>
                                    <td>Windows</td>
                                    <td>AMD Radeon</td>
                                </tr>
                                <tr className="tablebody">
                                    <td>7</td>
                                    <td>ASUS-VivoBook 15</td>
                                    <td>10-MAY-2024</td>
                                    <td>₹ 20,990</td>
                                    <td>15.6 Inch</td>
                                    <td>16 GB</td>
                                    <td>256 GB SSD</td>
                                    <td>Dual Core Intel Celeron N4020</td>
                                    <td>Windows</td>
                                    <td>Intel® UHD Graphics</td>
                                </tr>
                                <tr className="tablebody">
                                    <td>8</td>
                                    <td>DELL-15</td>
                                    <td>10-MAY-2024</td>
                                    <td>₹ 45,990</td>
                                    <td>14.0 Inch</td>
                                    <td>8 GB</td>
                                    <td>512 GB SSD</td>
                                    <td>Intel 12th Gen Core i5-1235U</td>
                                    <td>Windows</td>
                                    <td>Intel UHD Graphics</td>
                                </tr>
                                <tr className="tablebody">
                                    <td>9</td>
                                    <td>DELL - Inspiron 3536</td>
                                    <td>10-MAY-2024</td>
                                    <td>₹ 1,00,000</td>
                                    <td>15.6 Inch</td>
                                    <td>16 GB</td>
                                    <td>512 GB SSD</td>
                                    <td>Intel Core i5-1235U</td>
                                    <td>Windows</td>
                                    <td>Intel® UHD Graphics</td>
                                </tr>
                                <tr className="tablebody">
                                    <td>10</td>
                                    <td>HP-15s</td>
                                    <td>16-JUNE-2024</td>
                                    <td>₹ 42,990</td>
                                    <td>15.6 Inch</td>
                                    <td>16 GB</td>
                                    <td>512 GB SSD</td>
                                    <td>Ryzen 5-5500U</td>
                                    <td>Windows</td>
                                    <td>AMD Radeon</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default ListPurchase;