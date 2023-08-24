import React from 'react'
import './style.css'
import Table from './Table'

export default function Index5() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
                            </div>
                            <div className="table-responsive">
                                <Table />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
