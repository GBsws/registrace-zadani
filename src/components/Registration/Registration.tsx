import {useState} from 'react'


interface User {
  username: string,
  email: string,
  password:string,
  passwordConfirm: string,
}
export const Registration=():JSX.Element=>{
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const changeHandler =(e:React.ChangeEvent<HTMLInputElement>):void=>{
    const target = e.target as HTMLInputElement;
    const name = target.name
    const value = target.value
    setUser((item)=>({
      ...item, 
      [name]:value,
      }));
  }

  const emailChangeHandler = ({target: {value}}: React.ChangeEvent<HTMLInputElement>): void => {
      setUser((item) => ({
      ...item,
      email: value,
      username: value.split("@")[0], 
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(user)

    if (user.password !== user.passwordConfirm) {
      alert("Unmatching passwords");
      setUser((item) => ({
        ...item,
        password: "",
        passwordConfirm: "",
      }))
      return;
    }

    setUser({
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">Email Address </label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={emailChangeHandler}
        required
        placeholder="Email Address"
      /><br></br>
       <label  htmlFor="username">User Name </label>
       <input 
        type="text"
        value={user.username}
        onChange={changeHandler}
        required
        placeholder="User Name"
      /><br></br>
      <label  htmlFor="password">Password </label>
      <input 
        type="password"
        name="password"
        value={user.password}
        onChange={changeHandler}
        required
        placeholder="Password"
      /><br></br>
      <label htmlFor="passwordConfirm">Confirm Password </label>
      <input
        type="password"
        name="passwordConfirm"
        value={user.passwordConfirm}
        onChange={changeHandler}
        required
        placeholder="Confirm Password"
      /><br></br>
      <button type="submit">Register</button>
    </form>
  );
};
 
