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
