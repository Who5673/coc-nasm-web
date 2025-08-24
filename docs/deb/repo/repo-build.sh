#!/bin/bash
for d in stable kali-rolling bookworm artful bionic bullseye buster cosmic disco focal groovy hirsute impish jammy jessie kinetic noble oracular precise quantal raring saucy sid stretch trusty utopic vivid wheezy wily xenial yakkety zesty plucky; do
  reprepro -b . includedeb "$d" ./nasm-to-wasm_$(nasm-to-wasm -v)_amd64.deb
done
