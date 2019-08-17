import 'dart:io';

main() {
  calculoIMC();
}

//Programa que calcula o IMC
calculoIMC() {
  print(".::Digite seu peso ::.");
  double peso = double.parse(stdin.readLineSync());
  print(".::Digite sua altura::.");
  double altura = double.parse(stdin.readLineSync());

  double imc = calcIMC(peso, altura);

  imprimirResult(imc);
}

//Função que recebe o peso e a altura e retorna o IMC
double calcIMC(double peso, double altura) {
  return peso / (altura * altura);
}

//Imprimi o resultado baseado no imc passado por parametro
imprimirResult(double calc) {
  if (calc < 18.5) {
    print('Abaixo do peso');
  } else if (calc >= 18.5 && calc < 24.9) {
    print('peso normal');
  } else if (calc > 25 && calc < 29) {
    print('Sobrepeso');
  } else if (calc > 30 && calc < 34.9) {
    print('Obesidade grau 1');
  } else if (calc > 35 && calc < 39.9) {
    print('obesidade grau 2');
  } else {
    print('obesodade mórbida');
  }
}
