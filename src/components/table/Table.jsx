
import React from "react";
import './table.modules.css'; // Import your CSS file (if applicable)

function Table() {
  


    return (
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        
        <tr >
      <td>2019-12-01</td>
      <td>Paycheck from Bob's Burgers </td>
      <td>Income</td>
      <td>1000</td>
        </tr>
       
    <tr>
      <td>2019-12-02</td>
      <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
      <td>Food</td>
      <td>-10.35</td>
    </tr>
        
    <tr >
      <td>2019-12-02</td>
      <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
      <td>Food</td>
      <td>10.55</td>
    </tr>
       
    <tr>
      <td>2019-12-04</td>
      <td>Sunglasses, Urban Outfitters</td>
      <td>Fashion</td>
      <td>-24.99</td>
    </tr>
       
    <tr >
      <td>2019-12-06</td>
      <td>Venmo, Alice Pays you for burrito</td>
      <td>Food</td>
      <td>8.75</td>
    </tr>
        
    <tr >
      <td>2019-12-06</td>
      <td>Chipotle</td>
      <td>Food</td>
      <td>-17.594</td>
    </tr>
        
    </tbody>
      </table>
    
        
    );
  }

  export default Table