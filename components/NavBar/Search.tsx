import React, { useState } from 'react'

function Search() {
    const [search, setSearch] = useState<string>('');
    return (
        <div className="search-model">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="search-close-switch">+</div>
                <form
                    className="search-model-form"
                    // onSubmit={handleSubmit}
                  onKeyDown={(event) => {
                      event.key === 'Enter'
                    //   && handleSubmit()
                  }}
                >
                    <input
                        type="search"
                        id="search-input"
                        placeholder="Search here....."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
}

export default Search