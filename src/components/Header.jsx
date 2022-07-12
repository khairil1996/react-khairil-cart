import React from 'react'
import './Header.css'

export const Header = ({cart}) => {
    return (
        <div>

            <header className='heading'>
                <div className='row'>
                    <div className='col-sm-9'>
                        <h1>
                            Khairil's Shop
                        </h1>
                    </div>
                    <div className='col-sm-3'>
                        <button type="button" className="btn btn-success">
                            Cart <span className="badge text-bg-secondary">{cart}</span>
                        </button>
                    </div>
                </div>


            </header>



        </div>
    )
}
