import { computed, ref, watch } from 'vue'

export function useWishes(key) {
  watch(key, () => {
    console.log('Key changed', key.value)
  })

  const wishesSet = ref([
    'Lorem ipsum dolor sit amet laborum. Voluptate do ad incididunt mollit id voluptate excepteur magna adipiscing velit quis nostrud. Culpa sunt officia duis aute. Dolor dolore qui ea quis esse nulla ad aliqua irure non commodo dolor. Voluptate occaecat esse nostrud id dolor qui non occaecat commodo velit.',
    'Mollit aliqua tempor esse sit magna incididunt lorem officia occaecat duis ad. Exercitation magna et ullamco aliquip dolore eiusmod veniam. Reprehenderit consectetur eiusmod officia irure sed. Irure ea ad amet lorem mollit quis dolore reprehenderit aute in aliqua dolore. Dolor officia laboris est dolore culpa id in magna duis aliqua ut.',
    'Officia est commodo sed qui consectetur enim tempor velit esse. Voluptate ut sunt cupidatat dolore. Incididunt ex sint magna aliquip ex nostrud cillum proident. Dolore aliquip deserunt commodo pariatur ut. Deserunt magna id veniam ut est duis sint est aliqua nulla sit.',
    'Culpa laboris labore aute cupidatat dolor. Ut sed cillum ullamco eu in occaecat veniam. Cupidatat magna sed eiusmod officia qui quis laboris. Eu eu deserunt do sunt. Officia dolore est ad deserunt aliqua eiusmod culpa cupidatat.',
    'Sunt eu tempor reprehenderit sint ipsum amet culpa cillum eiusmod nisi. Dolor cupidatat officia dolor laboris in nisi reprehenderit velit ea cupidatat tempor est est. Nostrud sed aliqua nisi ea qui adipiscing. Sint dolor ex voluptate irure sed dolore lorem quis consectetur ullamco aliqua irure sint. Pariatur ad enim cupidatat tempor amet enim labore id ex ipsum reprehenderit do.'
  ])

  const notesSet = ref([
    'Lorem ipsum dolor sit amet nulla cillum aliquip magna cupidatat. Dolore in eu aliquip ullamco commodo. Qui cupidatat aute sit nisi. Id anim eiusmod sint ad incididunt incididunt ullamco. Sunt et irure laborum quis deserunt anim ut occaecat pariatur duis laborum dolor.',
    'Exercitation aute sunt adipiscing occaecat mollit veniam dolore aliquip anim tempor ea. Non sunt sed amet duis. Ut fugiat nostrud dolor cillum pariatur et reprehenderit dolor dolor lorem quis officia. In ex ullamco cupidatat id nulla. Nulla laboris voluptate consequat voluptate.',
    'Ut mollit reprehenderit sunt ad labore. Eu duis occaecat eu aute dolor veniam laboris. Sit velit incididunt consectetur culpa velit est commodo in in minim aliquip sit ut. Sunt in aliquip ipsum eu cillum dolor id adipiscing. Ad aliquip in ea in deserunt do amet aute.',
    'Anim labore deserunt commodo laboris. Esse culpa esse qui esse pariatur occaecat dolore. Est ipsum anim eiusmod amet mollit veniam proident pariatur duis. Non nostrud sint eu eiusmod aute. Non esse adipiscing anim sunt in in.',
    'Quis nostrud consectetur voluptate exercitation aliqua fugiat deserunt velit officia pariatur ad minim fugiat. Proident elit cillum aliqua tempor excepteur aute deserunt quis ut. Enim consequat ut ullamco elit dolor quis sit deserunt occaecat dolor ea magna. Aute ex excepteur laboris minim proident dolor in voluptate ut commodo sed et incididunt. Ea sed eu aliqua sunt in.'
  ])

  const wishes = computed(() => wishesSet.value)
  const notes = computed(() => notesSet.value)

  return { wishes, notes }
}
