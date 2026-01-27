const H2 = ({ title, marginBorder, color }: 
    { title: string, marginBorder: string, color: string }) => {

    return (
        <>
            <h2 className={`${color}`} style={{ lineHeight: '1.3' }}>
                {title}
            </h2>
            <div className={`h-1 w-24 bg-accent mb-8 rounded ${marginBorder}`} />
        </>
    );
}

export default H2;