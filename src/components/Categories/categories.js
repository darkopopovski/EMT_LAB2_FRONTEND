import React from 'react';

const categories = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>Novel</td>
                                </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default categories;
