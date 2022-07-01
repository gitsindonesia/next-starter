const Card = ({children, ...props}: any) => {
    return (
        <div className={`py-8 px-6 shadow rounded-xl ${props.className}`}>
            {children}
        </div>
    )
}

export default Card;