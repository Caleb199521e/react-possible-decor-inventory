import React from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import './Categories.css';

export default function Categories() {
    return (
        <div className="categories-container"> 
            
            <Sidebar /> 
        <div className="main">
            <Header />
        <main className="categories-main">
             
             <div className="categories-header">
                     <h1>Categories</h1>
                     <p>Dashboard {'>'} Categories</p>
                 </div>
                 <div className="categories-controls">
                     <input type="text" placeholder="Search" className="categories-search" />
                     <div className="categories-buttons">
                         <button className="filter-btn">Filter</button>
                         <button className="add-btn">+ Add New</button>
                     </div>
                 </div>
                 
                 <table className="categories-table">
                     <thead>
                         <tr>
                             <th><input type="checkbox" /></th>
                             <th>Category</th>
                             <th>Image</th>
                             <th>Rank</th>
                             <th>Status</th>
                             <th>Created on</th>
                             <th>Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {[...Array(10)].map((_, i) => (
                             <tr key={i}>
                                 <td><input type="checkbox" /></td>
                                 <td>Category {i + 1}</td>
                                 <td><img src="/images/sample.jpg" alt="Category" className="category-image" /></td>
                                 <td>{i + 1}</td>
                                 <td className={i % 2 === 0 ? "status-active" : "status-inactive"}>{i % 2 === 0 ? "Active" : "Inactive"}</td>
                                 <td>{new Date().toLocaleDateString()}</td>
                                 <td>
                                     <button className="action-view">👁</button>
                                     <button className="action-edit">✏️</button>
                                     <button className="action-delete">🗑️</button>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
                 <div className="pagination">
                     <button>{'<'}</button>
                     <button className="active">1</button>
                     <button>2</button>
                     <button>3</button>
                     <button>{'>'}</button>
                 </div>
             </main>

        </div>
           
        </div>
    );
}
