import { Code2 } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="bg-gradient-to-r from-primary to-primary-glow p-2 rounded-xl">
        <Code2 className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold text-gradient">Vedmai Software</span>
    </div>
  );
};

export default Logo;
