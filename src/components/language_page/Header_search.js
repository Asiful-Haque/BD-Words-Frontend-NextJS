import '../../styles/Header_search.css';
export default function Header_search() {
    return (
        <div className='Search_bar_container'>
            <div className="search-bar">
                <div className="label">URDU DICTIONARY</div>
                <div className="search_field">
                    <input type="text" placeholder="Search for words" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
                <div className="menu-icon"><i className="fa fa-bars"></i></div>
            </div>
        </div>
    );
}