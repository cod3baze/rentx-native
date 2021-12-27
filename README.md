# Focused in animation and Offline-first

## Animations

> using react-native-reanimated: focused in performance

- reanimated@2: roda na thread nativa. através de worklets.
- worklets: pedaços de códigos que podem ser movidos pra uma VM javascript, separada e executada de forma síncrona na thread nativa.
- useAnimatedStyle: animar o comportamento visual dos components
- useSharedValue: state do valor a ser animado
- withTiming: dá transição na animação
- interpolate: declara as etapas da animação, do value, dependendo de qual input ele vai estar...
  - extrapolate.CLAMP: nunca passar do limit estabelecido

```ts
// executa a função **startApp** na thread do JS
() => {
  "worklet";
  runOnJS(startApp)();
};
```

## Offline-first

- Apps pensados desde o início a funcionarem totalmente ou parcialmente sem conexão com a internet.

- planejamento

  - Quais features o user não pode fazer offline;
  - Quais dados podem ser persistidos para o app funcionar;
  - Informar se o user esta offline;
  - Salvar as imagens sempre que possível no cache do celular;

## CI/CD

- CI: Continuos Integration.

  - É a automação para que todas ás vezes que haja uma mudança no código da aplicação, ela seja integrada e implementada

- CD: Continuos Delivery.

  - É uma estratégia para colocar apps em produção de forma automatizada.

- Tools
  - [x] appcenter.ms
  - codemagic.io
  - bitrise.io
  - fastlane.tools [most user in ios]
