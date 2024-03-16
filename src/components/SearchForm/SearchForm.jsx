export default function SearchForm({onSearch}) {
    
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const inputValue = form.elements.query.value.trim();
        if (inputValue === '') {
            return
        }
        onSearch(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
            />
            <button type="submit">Search</button>
        </form>
    )
}