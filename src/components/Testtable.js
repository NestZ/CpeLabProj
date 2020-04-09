import React from 'react'
export default function Testtable(props) {
    return (
      <div>
        <table class="table dataTable my-0" id="dataTable">
            <thead>
                <tr>
                    <th>CourseNo</th>
                    <th>Title</th>
                    <th>Day</th>
                    <th>Credit</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>&nbsp; &nbsp;261xxxxxx</td>
                    <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                    <td>Mo-Th</td>
                    <td>&nbsp; &nbsp; 3</td>
                    <td>14.00-14.00</td>
                    <td><button class="btn btn-primary" type="button" >Button</button></td>
                </tr>

                <tr>
                    <td>&nbsp; &nbsp;261xxxxxx</td>
                    <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                    <td>Mo-Th</td>
                    <td>&nbsp; &nbsp; 3</td>
                    <td>14.00-14.00</td>
                    <td><button class="btn btn-primary" type="button" >Button</button></td>
                </tr>

                <tr>
                    <td>&nbsp; &nbsp;261xxxxxx</td>
                    <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                    <td>Mo-Th</td>
                    <td>&nbsp; &nbsp; 3</td>
                    <td>14.00-14.00</td>
                    <td><button class="btn btn-primary" type="button" >Button</button></td>
                </tr>

                <tr>
                    <td>&nbsp; &nbsp;261xxxxxx</td>
                    <td>xxxxxxxxxxxxxxxxxxxxxxx</td>
                    <td>Mo-Th</td>
                    <td>&nbsp; &nbsp; 3 &nbsp;</td>
                    <td>14.00-14.00</td>
                    <td><button class="btn btn-primary" type="button" >Button</button></td>
                </tr>
            
            </tbody>
                <tfoot>
                    <tr>
                        <td><strong>CourseNo</strong></td>
                        <td><strong>Title</strong></td>
                        <td><strong>Day</strong></td>
                        <td><strong>Credit</strong></td>
                        <td><strong>Time</strong></td>
                        <td><strong></strong></td>
                    </tr>
                </tfoot>
        </table>
                                    
    </div>
    )
  }