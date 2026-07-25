import chefLogo from "../assets/chef-logo.png";
export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt="A Chef Logo"></img>
      <span>Chef Claude</span>
    </header>
  );
}
