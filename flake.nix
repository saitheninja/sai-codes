{
  description = "Nix flake Node.js development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, ... }: let
    system = "x86_64-linux";

  in {
    devShells.${system}.default = let
      pkgs = import nixpkgs { inherit system; };
      # inherit same as { system = system; };

    in pkgs.mkShell {
      packages = with pkgs; [
        nodejs_20
      ];

      shellHook = ''
	      exec zsh
      '';
    };
  };
}
