export default function Card({ email, name }: { email: string; name: string }) {
  return (
    <div>
      <h1>Name: {email}</h1>
      <h1>Password: {name}</h1>
    </div>
  );
}
