{ pkgs ? import <nixpkgs> {}}:
let

  shell = pkgs.mkShell {
    nativeBuildInputs = [
      pkgs.nodejs-18_x
      pkgs.nodePackages.pnpm
      pkgs._1password
      pkgs.terraform
      pkgs.google-cloud-sdk
      pkgs.gh
      pkgs.jq
      pkgs.universal-ctags
      pkgs.fswatch
      pkgs.minikube
      pkgs.libressl
      pkgs.ngrok
    ];


    shellHook = ''
      export PATH=$PWD/bin:$PWD/bin/adr:$PWD/node_modules/.bin:$PATH
      export NODE_OPTIONS=--max_old_space_size=4096
      if [ ! -e .env ]; then
          ln -s packages/app/.env .env
      fi
    '';
  };

in shell

