const getCconfig = () => ( 
    {
        headers: {
            Autorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
)

export default getCconfig