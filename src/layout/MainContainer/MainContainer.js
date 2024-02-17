import React from "react";
import Inversion from "../../components/Inversion/Inversion";
import MiGuardadito from "../../components/MiGuardadito/MiGuardadito";
import Retiro from "../../components/Retiro/Retiro";
import ParrotLogin from "../../components/[Parrot] Login/[Parrot]Login";
import ParrotMenu from "../../components/[Parrot] Menu/[Parrot]Menu";
import ParrotPedidos from "../../components/[Parrot] Pedidos/[Parrot]Pedidos";
const MainContainer = ({ view = 0 }) => {
  const handleView = () => {
    switch (view) {
      case 0:
        return <MiGuardadito />;
      case 1:
        return <Retiro />;
      case 2:
        return <Inversion />;
      case 3:
        return <ParrotLogin />;
      case 4:
        return <ParrotMenu />;
      case 5:
        return <ParrotPedidos />;
      default:
        return <h1>UPS</h1>;
    }
  };
  return (
    <div className="w-4/5 h-5/6 mx-4 shadow-lg p-2 rounded-lg bg-white">
      {handleView()}
    </div>
  );
};

export default MainContainer;
