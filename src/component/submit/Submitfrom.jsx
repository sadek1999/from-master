

const Submitfrom = () => {
    const handalinput= e =>{
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('click in submit button')
    }
    return (
        <div>
            <form action="" onSubmit={handalinput}>
            <input type="text" name='name'/><br />
            <input type="email" name='email'/><br />
            <input type="phone" name='phone'/><br />
            <input type="submit" value="submit" />
            </form>
            
            
        </div>
    );
};

export default Submitfrom;