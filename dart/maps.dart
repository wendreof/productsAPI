import "dart:io";

List<Map<String, dynamic>> cadastros = [];

main() {
  bool condicao = true;

  while (condicao) {
    print(".::Digite um comando.::");
    String comando = stdin.readLineSync();
    if (comando == 'sair') {
      print(".::Programa finalizado::.");
      condicao = false;
    } else if (comando == 'cadastro') {
      cadastrar();
    } else if (comando == 'imprimir') {
      print(cadastros);
    } else {
      print(".::Esse programa não existe::.");
    }
  }
}

cadastrar() {
  Map<String, dynamic> cadastro = {};

  print(".:: Digite seu nome::.");
  cadastro["nome"] = stdin.readLineSync();

  print(".:: Digite sua idade::.");
  cadastro["idade"] = int.parse(stdin.readLineSync());

  print(".:: Digite seu apelido::.");
  cadastro["apelido"] = stdin.readLineSync();
  cadastros.add(cadastro);
}
