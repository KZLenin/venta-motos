export function Body({children}){
    return(
        <main style ={styles.main}>
            {children}
        </main>
    );
}

const styles ={
    main: {padding:"20px", minHeight:"70vh"}
};