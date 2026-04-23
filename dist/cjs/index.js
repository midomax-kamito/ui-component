'use strict';Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});const jsxRuntime=require('react/jsx-runtime'),React=require('react'),dayjs=require('dayjs'),dayjsGenerateConfig=require('rc-picker/lib/generate/dayjs'),enUS=require('rc-picker/lib/locale/en_US'),react=require('@phosphor-icons/react'),ssr=require('@phosphor-icons/react/dist/ssr'),Picker=require('rc-picker'),PopoverPrimitive=require('@radix-ui/react-popover'),cmdk=require('cmdk'),DialogPrimitive=require('@radix-ui/react-dialog'),RCForm=require('rc-field-form'),RcInputNumber=require('rc-input-number'),framerMotion=require('framer-motion'),AlertDialogPrimitive=require('@radix-ui/react-alert-dialog'),AspectRatioPrimitive=require('@radix-ui/react-aspect-ratio'),CheckboxPrimitive=require('@radix-ui/react-checkbox'),CollapsiblePrimitive=require('@radix-ui/react-collapsible'),vaul=require('vaul'),DropdownMenuPrimitive=require('@radix-ui/react-dropdown-menu'),MenubarPrimitive=require('@radix-ui/react-menubar'),ProgressPrimitive=require('@radix-ui/react-progress'),RadioGroupPrimitive=require('@radix-ui/react-radio-group'),ScrollAreaPrimitive=require('@radix-ui/react-scroll-area'),SelectPrimitive=require('@radix-ui/react-select'),SeparatorPrimitive=require('@radix-ui/react-separator'),SwitchPrimitives=require('@radix-ui/react-switch'),RCTable=require('rc-table'),TabsPrimitive=require('@radix-ui/react-tabs'),sonner=require('sonner'),TooltipPrimitive=require('@radix-ui/react-tooltip');function _interopNamespaceDefault(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:'Module'}});if(e){for(const k in e){if(k!=='default'){const d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:()=>e[k]});}}}n.default=e;return Object.freeze(n)}const React__namespace=/*#__PURE__*/_interopNamespaceDefault(React);const PopoverPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(PopoverPrimitive);const DialogPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(DialogPrimitive);const AlertDialogPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(AlertDialogPrimitive);const AspectRatioPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(AspectRatioPrimitive);const CheckboxPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(CheckboxPrimitive);const CollapsiblePrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(CollapsiblePrimitive);const DropdownMenuPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(DropdownMenuPrimitive);const MenubarPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(MenubarPrimitive);const ProgressPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(ProgressPrimitive);const RadioGroupPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(RadioGroupPrimitive);const ScrollAreaPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(ScrollAreaPrimitive);const SelectPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(SelectPrimitive);const SeparatorPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(SeparatorPrimitive);const SwitchPrimitives__namespace=/*#__PURE__*/_interopNamespaceDefault(SwitchPrimitives);const TabsPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(TabsPrimitive);const TooltipPrimitive__namespace=/*#__PURE__*/_interopNamespaceDefault(TooltipPrimitive);const AccordionContext = React.createContext(null);
AccordionContext.displayName = "AccordionContext";
function useAccordion() {
    const context = React.useContext(AccordionContext);
    if (!context) {
        throw new Error("useAccordion() must be used within an Accordion. It happens when you use AccordionHeader or AccordionBody components outside the Accordion component.");
    }
    return context;
}
const AccordionContextProvider = ({ value, children }) => {
    return jsxRuntime.jsx(AccordionContext.Provider, { value: value, children: children });
};
AccordionContextProvider.displayName = "AccordionContextProvider";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = config => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = className => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = className => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
};
/**
 * Exported for testing only
 */
const createClassMap = config => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach(classDefinition => {
    if (typeof classDefinition === 'string') {
      const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup]) => {
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(pathPart => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = func => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map(classDefinition => {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};

// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = maxCacheSize => {
  if (maxCacheSize < 1) {
    return {
      get: () => undefined,
      set: () => {}
    };
  }
  let cacheSize = 0;
  let cache = new Map();
  let previousCache = new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = config => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  const parseClassName = className => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return className => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
const sortModifiers = modifiers => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach(modifier => {
    const isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = config => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = '';
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        // Not a Tailwind class
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(':');
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      // Tailwind class omitted due to conflict
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    // Tailwind class not in conflict
    result = originalClassName + (result.length > 0 ? ' ' + result : result);
  }
  return result;
};

/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = mix => {
  if (typeof mix === 'string') {
    return mix;
  }
  let resolvedValue;
  let string = '';
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = key => {
  const themeGetter = theme => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = value => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = value => getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = value => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = value => getIsArbitraryValue(value, 'number', isNumber);
const isInteger = value => Boolean(value) && Number.isInteger(Number(value));
const isPercent = value => value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = value => arbitraryValueRegex.test(value);
const isTshirtSize = value => tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/new Set(['length', 'size', 'percentage']);
const isArbitrarySize = value => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = value => getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/new Set(['image', 'url']);
const isArbitraryImage = value => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = value => getIsArbitraryValue(value, '', isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = value =>
// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
// For example, `hsl(0 0% 0%)` would be classified as a length without this check.
// I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = () => false;
const isShadow = value => shadowRegex.test(value);
const isImage = value => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme('colors');
  const spacing = fromTheme('spacing');
  const blur = fromTheme('blur');
  const brightness = fromTheme('brightness');
  const borderColor = fromTheme('borderColor');
  const borderRadius = fromTheme('borderRadius');
  const borderSpacing = fromTheme('borderSpacing');
  const borderWidth = fromTheme('borderWidth');
  const contrast = fromTheme('contrast');
  const grayscale = fromTheme('grayscale');
  const hueRotate = fromTheme('hueRotate');
  const invert = fromTheme('invert');
  const gap = fromTheme('gap');
  const gradientColorStops = fromTheme('gradientColorStops');
  const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  const inset = fromTheme('inset');
  const margin = fromTheme('margin');
  const opacity = fromTheme('opacity');
  const padding = fromTheme('padding');
  const saturate = fromTheme('saturate');
  const scale = fromTheme('scale');
  const sepia = fromTheme('sepia');
  const skew = fromTheme('skew');
  const space = fromTheme('space');
  const translate = fromTheme('translate');
  const getOverscroll = () => ['auto', 'contain', 'none'];
  const getOverflow = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  const getSpacingWithAutoAndArbitrary = () => ['auto', isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ['', isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ['auto', isNumber, isArbitraryValue];
  const getPositions = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  const getLineStyles = () => ['solid', 'dashed', 'dotted', 'double', 'none'];
  const getBlendModes = () => ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'];
  const getAlign = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  const getZeroAndEmpty = () => ['', '0', isArbitraryValue];
  const getBreaks = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ['right', 'left', 'none', 'start', 'end']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none', 'start', 'end']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal', ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal', ...getAlign(), 'baseline']
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [...getAlign(), 'baseline']
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': [isArbitraryValue, spacing, 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh']
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [...getLineStyles(), 'wavy']
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      'text-wrap': [{
        text: ['wrap', 'nowrap', 'balance', 'pretty']
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [...getLineStyles(), 'hidden']
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-s': [{
        'border-s': [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-e': [{
        'border-e': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: ['', ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': [...getBlendModes(), 'plus-lighter', 'plus-darker']
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ['none', 'auto']
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'manipulation']
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-x': [{
        'touch-pan': ['x', 'left', 'right']
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-y': [{
        'touch-pan': ['y', 'up', 'down']
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      'touch-pz': ['touch-pinch-zoom'],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only'],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      'forced-color-adjust': [{
        'forced-color-adjust': ['auto', 'none']
      }]
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-s', 'border-color-e', 'border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
};
const twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);function cn(...inputs) {
    return twMerge(clsx(inputs));
}
function objectsToArray(object) {
    let result = [];
    Object.values(object).forEach((value) => {
        if (typeof value === "string") {
            result = [...result, value];
        }
        else if (typeof value === "object" && !Array.isArray(value) && value !== null) {
            result = [...result, ...objectsToArray(value)];
        }
        return undefined;
    });
    return result;
}
function objectsToString(object) {
    return objectsToArray(object).join(" ");
}
const removeVietnameseTones = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a'); //a
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e'); //e
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i'); //i
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o'); //o
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u'); //u
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y'); //y
    str = str.replace(/đ/g, 'd'); //d
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A'); //A
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E'); //E
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I'); //I
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O'); //O
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U'); //U
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y'); //Y
    str = str.replace(/Đ/g, 'D'); //D
    return str;
};
const toLowerSnakeCase = (input) => {
    return removeVietnameseTones(input
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''))
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '_');
};
const REGEX_SNAKE_CASE = /^[a-z0-9_]+$/;const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === undefined ? undefined : config.variants) == null) return cx(base, props === null || props === undefined ? undefined : props.class, props === null || props === undefined ? undefined : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === undefined ? undefined : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === undefined ? undefined : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === undefined ? undefined : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === undefined ? undefined : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === undefined ? undefined : props.class, props === null || props === undefined ? undefined : props.className);
    };const accordionHeaderVariants = cva(clsx("flex justify-between p-3 gap-3 items-center w-full antialiased", "border-none rounded-xl", "text-base leading-6 text-gray-800 text-left font-semibold select-none"), {
    variants: {
        variant: {
            default: clsx("border-gray-200"),
            success: clsx("border-green-500"),
            error: clsx("border-red-500 hover:ring-0 active:ring-0"),
        },
        size: {
            sm: clsx("h-10 min-h-10"),
            md: clsx("h-11 min-h-11"),
            lg: clsx("h-12 min-h-12"),
        },
        asChild: {
            true: clsx("border-0 hover:bg-gray-50 hover:rounded-none"),
            false: clsx("border"),
        },
    },
    defaultVariants: {
        size: "md",
        variant: "default",
        asChild: false,
    },
});
const AccordionHeader = React.forwardRef(({ className, children, variant, size, asChild, ...rest }, ref) => {
    const { open, icon, disabled } = useAccordion();
    let iConPops;
    if (typeof icon === "boolean") {
        iConPops = {
            isShow: icon,
            icon: (jsxRuntime.jsx(react.CaretDown, { size: 24, color: "#3F3F46", className: cn("transi-rotate duration-300 cursor-pointer", { "rotate-180": open }) })),
        };
    }
    else {
        iConPops = {
            isShow: true,
            icon: icon,
        };
    }
    return (jsxRuntime.jsxs("div", { ...rest, ref: ref, className: cn(accordionHeaderVariants({ variant, size, asChild }), { "cursor-not-allowed": disabled }, className), children: [children, iConPops.isShow && iConPops.icon && jsxRuntime.jsx("span", { children: iConPops.icon })] }));
});
AccordionHeader.displayName = "AccordionHeader";const AccordionBody = React.forwardRef(({ className, children, asChild }, ref) => {
    const { open, animation } = useAccordion();
    const heightAnimation = {
        unmount: {
            height: "0px",
            transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
        },
        mount: {
            height: "auto",
            transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
        },
    };
    const mainAnimation = {
        unmount: {
            transition: { duration: 0.3, ease: "linear" },
        },
        mount: {
            transition: { duration: 0.3, ease: "linear" },
        },
    };
    const appliedAnimation = {
        unmount: {
            ...heightAnimation.unmount,
            ...animation.unmount,
        },
        mount: {
            ...heightAnimation.mount,
            ...animation.mount,
        },
    };
    return (jsxRuntime.jsx(framerMotion.LazyMotion, { features: framerMotion.domAnimation, children: jsxRuntime.jsx(framerMotion.motion.div, { ref: ref, className: cn("overflow-hidden"), initial: "unmount", exit: "unmount", animate: open ? "mount" : "unmount", variants: appliedAnimation, children: jsxRuntime.jsx(framerMotion.motion.div, { className: cn("m-2 mt-0 overflow-hidden", "w-[calc(100%_-_16px)] text-gray-800 antialiased text-base leading-6 font-medium", "flex flex-col gap-5", {
                    "gap-0 border border-gray-200 rounded-xl [&>div:not(:last-child)]:border-b [&>div:not(:last-child)]:border-solid [&>div:not(:last-child)]:border-gray-200": asChild,
                }, className), initial: "unmount", exit: "unmount", animate: open ? "mount" : "unmount", variants: mainAnimation, children: children }) }) }));
});
AccordionBody.displayName = "AccordionBody";const accordionVariants = cva(clsx("block relative w-full bg-white", "rounded-xl border", "text-base text-gray-800 leading-6 text-left font-semibold select-none"), {
    variants: {
        variant: {
            default: clsx("border-gray-200"),
            success: clsx("border-green-500"),
            error: clsx("border-red-500 hover:ring-0 active:ring-0"),
        },
        open: {
            true: clsx("border-primary-500 hover:bg-white"),
            false: clsx("border-gray-200"),
        },
        asChild: {
            true: clsx("border-none border-0 rounded-none"),
            false: clsx("border hover:bg-gray-50"),
        },
    },
    compoundVariants: [
        {
            open: true,
            asChild: false,
            className: clsx("border-primary-500 hover:bg-white"),
        }
    ],
    defaultVariants: {
        variant: "default",
        open: false,
        asChild: false,
    },
});
const Accordion = ({ open, icon, className, disabled, variant, asChild, animation = {
    unmount: {},
    mount: {},
}, children, ...rest }) => {
    const contextValue = React.useMemo(() => ({ open, icon, animation, disabled }), [open, icon, animation, disabled]);
    return (jsxRuntime.jsx(AccordionContextProvider, { value: contextValue, children: jsxRuntime.jsx("div", { ...rest, className: cn(accordionVariants({ variant, open, asChild }), { "cursor-not-allowed opacity-50": disabled }, className), children: children }) }));
};
Accordion.displayName = "Accordion";
Accordion.Body = AccordionBody;
Accordion.Header = AccordionHeader;const buttonVariants = cva(clsx("inline-flex justify-center gap-2 items-center whitespace-nowrap", "font-medium transition-colors disabled:cursor-not-allowed", "active:ring-0 disabled:bg-opacity-50 disabled:text-opacity-50", "outline-none"), {
    variants: {
        variant: {
            primary: clsx("bg-primary-500 text-white", "hover:bg-primary-600", "active:bg-primary-700"),
            secondary: clsx("bg-secondary", "hover:bg-gray-200", "focus-visible:bg-gray-100 focus-visible:ring-gray-200", "active:bg-gray-300"),
            neutral: clsx("bg-white text-primary-500"),
            success: clsx("bg-green-500 text-white", "hover:bg-green-600", "focus-visible:bg-green-500 focus-visible:ring-green-200", "active:bg-green-700"),
            warning: clsx("bg-yellow-500 text-white", "hover:bg-yellow-600", "focus-visible:bg-yellow-500 focus-visible:ring-yellow-200", "active:bg-yellow-700"),
            danger: clsx("bg-red-500 text-white", "hover:bg-red-600", "focus-visible:bg-red-500 focus-visible:ring-red-200", "active:bg-red-700"),
            gray: clsx("bg-gray-100 text-gray-700", "hover:bg-gray-200", "focus-visible:bg-gray-100 focus-visible:ring-gray-200", "active:bg-gray-300"),
        },
        size: {
            sm: "text-sm leading-[21px] h-10 px-4 py-2.5",
            md: "text-sm leading-[21px] h-11 px-4 py-3",
            lg: "text-base leading-6 h-12 px-4 py-3.5",
        },
        shape: {
            rounded: "rounded-lg",
            circle: "rounded-full",
        },
        icon: {
            true: "",
            false: "",
        },
        outline: {
            true: clsx("bg-white ring-1 active:ring-1", "focus:bg-white focus:ring-2"),
            false: "",
        },
    },
    compoundVariants: [
        { icon: true, size: "sm", class: "w-10 min-w-10 px-2.5" },
        { icon: true, size: "md", class: "w-11 min-w-11 px-3" },
        { icon: true, size: "lg", class: "w-12 min-w-12 px-3.5" },
        {
            outline: true,
            variant: "primary",
            class: clsx("text-primary-700 ring-primary-700", "hover:bg-primary-50", "focus-visible:ring-primary-700", "active:bg-primary-100 active:ring-primary-700"),
        },
        {
            outline: true,
            variant: "secondary",
            class: clsx("text-primary-500 ring-gray-300", "hover:bg-gray-50 hover:ring-gray-300", "focus-visible:ring-gray-400", "active:bg-gray-100 active:ring-gray-300"),
        },
        {
            outline: true,
            variant: "neutral",
            class: clsx("text-primary-500 ring-gray-200", "hover:bg-gray-50 hover:ring-gray-200", "focus-visible:ring-gray-200", "active:bg-gray-100 active:ring-gray-200"),
        },
        {
            outline: true,
            variant: "success",
            class: clsx("text-green-700 ring-green-700", "hover:bg-green-50 hover:ring-green-700", "focus-visible:ring-green-700", "active:bg-green-100 active:ring-green-700"),
        },
        {
            outline: true,
            variant: "warning",
            class: clsx("text-yellow-700 ring-yellow-700", "hover:bg-yellow-50 hover:ring-yellow-700", "focus-visible:ring-yellow-700", "active:bg-yellow-100 active:ring-yellow-700"),
        },
        {
            outline: true,
            variant: "danger",
            class: clsx("text-red-700 ring-red-700", "hover:bg-red-50 hover:ring-red-700", "focus-visible:ring-red-700", "active:bg-red-100 active:ring-red-700"),
        },
        {
            outline: true,
            variant: "gray",
            class: clsx("text-gray-700 ring-gray-400", "hover:bg-gray-50 hover:ring-gray-400", "focus-visible:ring-gray-400", "active:bg-gray-100 active:ring-gray-400"),
        },
    ],
    defaultVariants: {
        variant: "primary",
        size: "md",
        shape: "rounded",
        icon: false,
        outline: false,
    },
});/**
 * A button means an operation (or a series of operations). Clicking a button will trigger its corresponding business logic.
 */
const Button = React.forwardRef(({ className, variant, size, shape, icon, outline, children, type = 'button', ...props }, ref) => {
    return (jsxRuntime.jsx("button", { ...props, className: cn(buttonVariants({
            variant,
            size,
            shape,
            icon,
            outline,
        }), className), type: type || 'button', ref: ref, children: children }));
});
Button.displayName = 'Button';const alertVariants = cva('relative rounded-lg border p-3 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-800', {
    variants: {
        variant: {
            primary: clsx('bg-primary-500/[0.1]', 'border-primary-400'),
            warning: clsx('bg-yellow-500/[0.1]', 'border-yellow-400'),
            danger: clsx('bg-red-500/[0.1]', 'border-red-400'),
            success: clsx('bg-green-500/[0.1]', 'border-green-400'),
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});
const Alert = React__namespace.forwardRef(({ title, children, icon, className, handleClose, isVisible, setIsVisible, variant, iconClose, ...props }, ref) => {
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: isVisible && (jsxRuntime.jsx("div", { ref: ref, role: "alert", className: cn(alertVariants({ variant }), { 'p-4': title }, className), ...props, children: jsxRuntime.jsxs("div", { className: "flex justify-between gap-3", children: [title ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: `flex gap-3 ${alertTitleVariants({ variant })}`, children: [icon, jsxRuntime.jsx("h5", { children: title })] }), jsxRuntime.jsx("div", { className: "flex items-center mt-1.5", children: jsxRuntime.jsx(AlertDescription, { variant: variant, children: children }) })] })) : (jsxRuntime.jsx("div", { className: "flex items-center", children: jsxRuntime.jsx(AlertDescription, { variant: variant, children: children }) })), iconClose && (jsxRuntime.jsx(Button, { size: "sm", shape: "circle", icon: true, variant: "neutral", className: "h-6 w-6 min-h-6 min-w-6 p-1", onClick: handleClose, children: jsxRuntime.jsx(react.X, { className: "text-gray-800" }) }))] }) })) }));
});
Alert.displayName = 'Alert';
const alertTitleVariants = cva('font-medium leading-none tracking-tight', {
    variants: {
        variant: {
            primary: clsx('text-primary-700'),
            warning: clsx('text-yellow-700'),
            danger: clsx('text-red-700'),
            success: clsx('text-green-700'),
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});
const alertDescriptionVariants = cva('text-sm leading-[21px] [&_p]:leading-relaxed', {
    variants: {
        variant: {
            primary: clsx('text-primary-700'),
            warning: clsx('text-yellow-700'),
            danger: clsx('text-red-700'),
            success: clsx('text-green-700'),
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});
const AlertDescription = React__namespace.forwardRef(({ className, variant, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn(alertDescriptionVariants({ variant }), className), ...props })));
AlertDescription.displayName = 'AlertDescription';
Alert.displayName = 'Alert';const variantCommon = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});const AlertDialog = AlertDialogPrimitive__namespace.Root;
const AlertDialogTrigger = AlertDialogPrimitive__namespace.Trigger;
const AlertDialogPortal = AlertDialogPrimitive__namespace.Portal;
const AlertDialogOverlay = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AlertDialogPrimitive__namespace.Overlay, { className: cn("fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref: ref })));
AlertDialogOverlay.displayName = AlertDialogPrimitive__namespace.Overlay.displayName;
const AlertDialogContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AlertDialogPrimitive__namespace.Content, { ref: ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props })));
AlertDialogContent.displayName = AlertDialogPrimitive__namespace.Content.displayName;
const AlertDialogHeader = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props }));
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AlertDialogPrimitive__namespace.Title, { ref: ref, className: cn("text-lg font-semibold", className), ...props })));
AlertDialogTitle.displayName = AlertDialogPrimitive__namespace.Title.displayName;
const AlertDialogDescription = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AlertDialogPrimitive__namespace.Description, { ref: ref, className: cn("text-sm leading-[21px] text-gray-500", className), ...props })));
AlertDialogDescription.displayName = AlertDialogPrimitive__namespace.Description.displayName;
const AlertDialogAction = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AlertDialogPrimitive__namespace.Action, { ref: ref, className: cn(variantCommon(), className), ...props })));
AlertDialogAction.displayName = AlertDialogPrimitive__namespace.Action.displayName;
const AlertDialogCancel = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(AlertDialogPrimitive__namespace.Cancel, { ref: ref, className: cn(variantCommon({ variant: "outline" }), "mt-2 sm:mt-0", className), ...props })));
AlertDialogCancel.displayName = AlertDialogPrimitive__namespace.Cancel.displayName;function AspectRatio({ ...props }) {
    return jsxRuntime.jsx(AspectRatioPrimitive__namespace.Root, { "data-slot": "aspect-ratio", ...props });
}const badgeVariants = cva("inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary-100 text-primary-700 shadow hover:bg-primary-100/80",
            secondary: "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-100/80",
            error: "border-transparent bg-red-100 text-red-700 shadow hover:bg-red-100/80",
            warning: "border-transparent bg-yellow-100 text-yellow-700 shadow hover:bg-yellow-100/80",
            success: "border-transparent bg-green-100 text-green-700 shadow hover:bg-green-100/80",
            outline: "text-primary-700 border-primary-100",
        },
        radius: {
            none: "rounded-none",
            sm: "rounded",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            full: "rounded-full",
        },
    },
    defaultVariants: {
        variant: "default",
        radius: "md",
    },
});
/**
 *
 * Displays a badge or a component that looks like a badge.
 */
function Badge({ className, variant = "default", radius = "md", color, bgColor, ...props }) {
    const style = {
        backgroundColor: bgColor,
        color: color,
    };
    return jsxRuntime.jsx("div", { className: cn(badgeVariants({ variant, radius }), className), style: style, ...props });
}function DynamicElement({ as, children, ...props }) {
    const Component = as || 'div';
    return jsxRuntime.jsx(Component, { ...props, children: children });
}
const BreadCrumb = React.forwardRef(({ data = [], className, separator = jsxRuntime.jsx(react.CaretRight, { size: 20, className: "text-gray-500" }), linkElement = 'a', onItemClick, ...props }, ref) => {
    const handleClick = (path, e) => {
        if (path && onItemClick) {
            e.preventDefault();
            onItemClick(path);
        }
    };
    return (jsxRuntime.jsx("div", { className: cn('flex flex-row gap-1 items-center p-2', className), ref: ref, ...props, children: data.map((item, index) => {
            return (jsxRuntime.jsx(React.Fragment, { children: item.path ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DynamicElement, { as: linkElement, href: item.path, className: "text-sm font-medium text-primary-500", onClick: (e) => handleClick(item.path, e), ...props, children: item.title }), separator] })) : (jsxRuntime.jsx(DynamicElement, { className: "text-sm font-medium text-gray-700", children: item.title })) }, index));
        }) }));
});
BreadCrumb.displayName = 'BreadCrumb';const Card = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("rounded-lg border bg-card text-card-foreground shadow-sm", className), ...props })));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("h3", { ref: ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("p", { ref: ref, className: cn("text-sm text-muted-foreground", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("p-6 pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("div", { ref: ref, className: cn("flex items-center p-6 pt-0", className), ...props })));
CardFooter.displayName = "CardFooter";const checkboxVariants = cva(clsx("group shrink-0 rounded border border-gray-200 bg-gray-50 hover:border-primary-200 text-white", "data-[state=indeterminate]:!bg-primary-500 data-[state=indeterminate]:text-white", "data-[state=checked]:!bg-primary-500 data-[state=checked]:text-white", "disabled:cursor-not-allowed disabled:opacity-50", "transition-all duration-300 ease-in-out"), {
    variants: {
        size: {
            sm: "w-4 h-4",
            md: "w-5 h-5",
            lg: "w-6 h-6",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const checkboxIndicatorVariants = cva(clsx("flex items-center justify-center text-current"), {
    variants: {
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const Checkbox = React__namespace.forwardRef(({ className, size, ...props }, ref) => (jsxRuntime.jsx(CheckboxPrimitive__namespace.Root, { ref: ref, className: cn(checkboxVariants({ size }), className), ...props, children: jsxRuntime.jsxs(CheckboxPrimitive__namespace.Indicator, { className: cn(checkboxIndicatorVariants({ size })), children: [jsxRuntime.jsx(react.Minus, { className: "group-data-[state=checked]:hidden" }), jsxRuntime.jsx(react.Check, { className: "group-data-[state=indeterminate]:hidden" })] }) })));
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;const Collapsible = CollapsiblePrimitive__namespace.Root;
const CollapsibleTrigger = CollapsiblePrimitive__namespace.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive__namespace.CollapsibleContent;const Popover = PopoverPrimitive__namespace.Root;
const PopoverTrigger = PopoverPrimitive__namespace.Trigger;
const PopoverContent = React.forwardRef(({ className, align = "center", sideOffset = 4, container, ...props }, ref) => (jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { container: container, children: jsxRuntime.jsx(PopoverPrimitive__namespace.Content, { ref: ref, align: align, sideOffset: sideOffset, className: cn("z-50 w-72 rounded-md border bg-white p-4 text-gray-700 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;const Dialog = DialogPrimitive__namespace.Root;
const DialogTrigger = DialogPrimitive__namespace.Trigger;
const DialogPortal = DialogPrimitive__namespace.Portal;
const DialogClose = DialogPrimitive__namespace.Close;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Overlay, { ref: ref, className: cn("fixed inset-0 z-50 bg-black/60  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props })));
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Content, { ref: ref, className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className), ...props })));
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
const DialogHeader = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props }));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Title, { ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props })));
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref: ref, className: cn("text-sm leading-[21px] text-gray-500", className), ...props })));
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;const Command = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command, { ref: ref, className: cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-popover-foreground', className), ...props })));
Command.displayName = cmdk.Command.displayName;
const CommandDialog = ({ children, ...props }) => {
    return (jsxRuntime.jsx(Dialog, { ...props, children: jsxRuntime.jsx(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: jsxRuntime.jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_data-[cmdk-input-wrapper]_svg]:h-5 [&_data-[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: children }) }) }));
};
const CommandInput = React__namespace.forwardRef(({ className, classNameCustom, icon, ...props }, _) => {
    const inputRef = React__namespace.useRef(null);
    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        props.onValueChange?.('');
    };
    return (jsxRuntime.jsxs("div", { className: cn("flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-md h-10 text-gray-500", classNameCustom), "data-cmdk-input-wrapper": "", children: [icon ?? jsxRuntime.jsx(react.MagnifyingGlass, { className: "h-4 w-4 shrink-0 opacity-50" }), jsxRuntime.jsx(cmdk.Command.Input, { ref: inputRef, className: cn('peer font-normal flex h-full w-full bg-transparent py-3 text-sm leading-[21px] text-gray-700 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50', className), ...props }), jsxRuntime.jsx("span", { onClick: clearInput, className: "peer-placeholder-shown:hidden  peer-disabled-[not(:placeholder-shown)]:hidden", children: jsxRuntime.jsx(react.X, { className: "cursor-pointer text-gray-500", size: 14 }) })] }));
});
CommandInput.displayName = cmdk.Command.Input.displayName;
const CommandList = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command.List, { ref: ref, className: cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className), ...props })));
CommandList.displayName = cmdk.Command.List.displayName;
const CommandEmpty = React__namespace.forwardRef((props, ref) => (jsxRuntime.jsx(cmdk.Command.Empty, { ref: ref, className: "text-center text-sm leading-[21px]", ...props })));
CommandEmpty.displayName = cmdk.Command.Empty.displayName;
const CommandGroup = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command.Group, { ref: ref, className: cn('overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground', className), ...props })));
CommandGroup.displayName = cmdk.Command.Group.displayName;
const CommandSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command.Separator, { ref: ref, className: cn('-mx-1 h-px bg-border', className), ...props })));
CommandSeparator.displayName = cmdk.Command.Separator.displayName;
const CommandItem = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(cmdk.Command.Item, { ref: ref, className: cn('relative group flex cursor-default items-center rounded-lg text-sm leading-[21px] outline-none p-3 gap-2', '[&:not(.selected)]:hover:bg-gray-100', 'aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50', className), ...props })));
CommandItem.displayName = cmdk.Command.Item.displayName;
const CommandShortcut = ({ className, ...props }) => {
    return (jsxRuntime.jsx("span", { className: cn('ml-auto text-xs tracking-widest text-muted-foreground', className), ...props }));
};
CommandShortcut.displayName = 'CommandShortcut';const comboboxVariants$2 = cva(clsx('group font-normal text-sm leading-[21px] text-gray-500', 'data-[state=open]:text-gray-800 data-[state=open]:border-primary-200 px-4 outline-none', 'flex w-full items-center justify-between rounded-lg hover:z-[2]', 'disabled:cursor-not-allowed [&>span]:line-clamp-1', 'transition-all duration-300 ease-in bg-white', 'hover:ring-2 hover:ring-primary-300 active:ring-primary-200'), {
    variants: {
        variant: {
            default: clsx('border border-gray-200'),
            success: clsx('border border-green-500'),
            error: clsx('border border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500'),
        },
        size: {
            sm: clsx('h-10'),
            md: clsx('h-11'),
            lg: clsx('h-12'),
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'default',
    },
});
const Combobox = React__namespace.forwardRef(({ variant, size, value = '', onChange, options, prefixes, suffixes, disabled, placeholder = 'Select a item', header, footer, searchInputOption = {
    placeholder: 'Search...',
}, triggerClassName = '', contentClassName = '', itemClassName = '', searchable = false, customValue, allowClear = false, sideOffset, contentScroll, align = 'center', alignOffset, modalPopover = false, customOption, emptyText = 'No results found.', textEmpty, ...props }, _) => {
    const [open, setOpen] = React__namespace.useState(false);
    const [currentValue, setCurrentValue] = React__namespace.useState(value);
    const [dataOptions, setDataOptions] = React__namespace.useState(options ?? []);
    const [search, setSearch] = React__namespace.useState('');
    const containerRef = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
        setDataOptions(options);
    }, [options]);
    React__namespace.useEffect(() => {
        setCurrentValue(value);
    }, [value]);
    const filteredOptions = React__namespace.useMemo(() => dataOptions.filter((option) => typeof option.title === 'string' && option.title.includes(search)), [search, dataOptions]);
    const onClear = (event) => {
        event.stopPropagation();
        setCurrentValue('');
        onChange?.('');
    };
    const text = React__namespace.useMemo(() => {
        if (currentValue)
            return dataOptions.find((option) => option.value === currentValue)
                ?.title;
        return '';
    }, [currentValue, dataOptions]);
    const handleOpen = (open) => {
        if (disabled)
            return;
        setOpen(open);
        setSearch('');
    };
    const optionItem = (option) => {
        if (customOption && typeof customOption === 'function') {
            return (jsxRuntime.jsx(CommandItem, { value: option.value, className: itemClassName, onSelect: (currentValue) => {
                    setCurrentValue(currentValue);
                    setOpen(false);
                    onChange?.(currentValue);
                }, children: customOption(option) }, option.value));
        }
        return (jsxRuntime.jsx(CommandItem, { value: option.value, className: cn(currentValue === option.value &&
                'text-white bg-primary-500 selected', itemClassName), onSelect: (currentValue) => {
                setCurrentValue(currentValue);
                setOpen(false);
                onChange?.(currentValue);
            }, children: jsxRuntime.jsx("span", { className: "text-current truncate", title: option.title, children: option.title }) }, option.value));
    };
    const isHasValue = text?.length;
    return (jsxRuntime.jsx("div", { ref: containerRef, className: "relative w-full h-full", ...props, children: jsxRuntime.jsxs(Popover, { open: open, onOpenChange: handleOpen, modal: modalPopover, children: [jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: jsxRuntime.jsxs("button", { role: "combobox", "aria-expanded": open, disabled: disabled, className: cn(comboboxVariants$2({ variant, size }), {
                            'bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0': disabled,
                        }, triggerClassName, currentValue && 'text-gray-800'), children: [jsxRuntime.jsxs("div", { className: "flex flex-1 min-w-0 gap-2", children: [prefixes && (jsxRuntime.jsx("div", { className: "flex gap-2 ", children: jsxRuntime.jsx("div", { className: "group-active:text-primary-500 group-disabled:text-gray-400", children: prefixes }) })), isHasValue ? (typeof customValue === 'function' ? (customValue(currentValue, dataOptions)) : (jsxRuntime.jsx("span", { className: cn('truncate text-sm leading-[21px] text-gray-800'), children: text }))) : (jsxRuntime.jsx("span", { className: cn('truncate text-sm leading-[21px] text-gray-500'), children: placeholder }))] }), jsxRuntime.jsxs("div", { className: "flex flex-row items-center flex-shrink-0 gap-2", children: [allowClear && (jsxRuntime.jsx(react.X, { size: 14, className: cn('flex-shrink-0 text-gray-500 opacity-0', allowClear && isHasValue && 'opacity-100 cursor-pointer'), onClick: onClear })), suffixes ? (jsxRuntime.jsx("div", { className: cn('flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500', {
                                            'group-data-[state=open]:text-gray-700 text-gray-700': isHasValue,
                                        }), children: suffixes })) : (jsxRuntime.jsx(react.CaretUpDown, { className: cn('flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500', {
                                            'group-data-[state=open]:text-gray-700 text-gray-700': isHasValue,
                                        }), size: 18 }))] })] }) }), jsxRuntime.jsx(PopoverContent, { className: `bg-white border border-gray-100 z-[100] mt-1 shadow-c5 w-[var(--radix-popper-anchor-width)] overflow-auto pointer-events-auto ${contentClassName}`, sideOffset: sideOffset ?? -50, align: align, alignOffset: alignOffset ?? 0, onEscapeKeyDown: () => setOpen(false), children: jsxRuntime.jsxs(Command, { className: "gap-2 overflow-y-auto", shouldFilter: false, children: [searchable && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: "flex flex-col gap-3", children: [header && jsxRuntime.jsx("div", { children: header }), jsxRuntime.jsx(CommandInput, { value: search, onValueChange: setSearch, icon: searchInputOption?.icon, placeholder: searchInputOption?.placeholder })] }), jsxRuntime.jsx(CommandEmpty, { children: emptyText })] })), dataOptions.length > 0 ? (filteredOptions.length > 0 && (jsxRuntime.jsx("div", { ref: (ref) => {
                                    const elem = ref;
                                    if (elem) {
                                        const item = elem.querySelector(`[data-value="${currentValue}"]`);
                                        if (item) {
                                            item.scrollIntoView();
                                        }
                                    }
                                }, className: cn('max-h-64 h-auto overflow-y-auto block', contentScroll), children: jsxRuntime.jsx(CommandGroup, { children: filteredOptions.map((option) => optionItem(option)) }) }))) : (jsxRuntime.jsx("div", { className: "text-center text-sm leading-[21px] text-gray-400", children: textEmpty })), footer && (jsxRuntime.jsx("div", { className: "pt-3 border-t border-t-gray-200", children: footer }))] }) })] }) }));
});
Combobox.displayName = 'Combobox';const iDatePickerVariants = cva(clsx('relative w-full shadow-none', 'group rounded-lg px-4 py-2 text-sm flex items-center gap-2 justify-between text-gray-500 bg-white ', 'hover:ring-2 hover:ring-primary-300 hover:bg-white', 'active:ring-2 active:ring-primary-300 active:bg-white', 'focus-visible:rounded-none focus-visible:border-0 focus-visible:border-none focus-visible:outline-none', 'transition-[box-shadow] duration-300 ease-in', '[&_.rc-picker-input]:h-full [&_.rc-picker-input]:min-w-[150px] [&_.rc-picker-input]:gap-2', '[&_.rc-picker-clear]:relative [&_.rc-picker-clear]:right-0 [&_.rc-picker-clear]:order-2 [&_.rc-picker-clear]:flex [&_.rc-picker-clear]:items-center', '[&_.rc-picker-suffix]:flex [&_.rc-picker-suffix]:order-3 [&_.rc-picker-suffix]:items-center [&_.rc-picker-suffix]:justify-center [&_.rc-picker-suffix]:bg-inherit', '[&_input]:placeholder:text-gray-500 [&_input]:outline-none [&_input]:text-gray-800 [&_input]:min-w-[100px]'), {
    variants: {
        size: {
            sm: clsx('h-10 min-h-10 [&_input]:placeholder:text-sm [&_input]:text-sm [&_input]:leading-[21px]'),
            md: clsx('h-11 min-h-11 [&_input]:placeholder:text-sm [&_input]:text-sm [&_input]:leading-[21px]'),
            lg: clsx('h-12 min-h-12 [&_input]:placeholder:text-base [&_input]:text-base [&_input]:leading-6'),
        },
        variant: {
            default: clsx('border border-gray-200 [&_.rc-picker.rc-picker-focused]:border-primary-200'),
            success: clsx('border border-green-500'),
            error: clsx('border border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500'),
        },
    },
    defaultVariants: {
        size: 'sm',
        variant: 'default',
    },
});
const dropDownVariant$1 = cva(clsx('shadow-md border border-gray-100 rounded-lg overflow-hidden', '[&_.rc-picker-panel]:bg-white [&_.rc-picker-panel]:min-w-[274px] [&_.rc-picker-panel]:border-none [&_.rc-picker-panel]:outline-none', '[&_.rc-picker-date-panel]:px-2 [&_.rc-picker-date-panel]:py-0 [&_.rc-picker-time-panel]:border-l-gray-200', '[&_.rc-picker-content]:w-full [&_.rc-picker-content]:max-h-[250px]', '[&_.rc-picker-header]:p-2 [&_.rc-picker-header]:h-10 [&_.rc-picker-header]:flex-shink-0 [&_.rc-picker-header]:items-center [&_.rc-picker-header]:gap-2', '[&_.rc-picker-header-view]:flex [&_.rc-picker-header-view]:items-center [&_.rc-picker-header-view]:justify-center', '[&_.rc-picker-header-view]:text-primary-500 [&_.rc-picker-header-view]:text-sm [&_.rc-picker-header-view]:leading-[21px] [&_.rc-picker-header-view]:font-semibold', '[&_.rc-picker-month-btn]:mr-1', '[&_th]:min-h-[34px] [&_th]:min-w-[36px] [&_th]:px-1 [&_th]:py-2 [&_th]:text-gray-700 [&_th]:text-xs [&_th]:font-semibold', '[&_.rc-picker-cell]:min-h-[34px] [&_.rc-picker-cell]:min-w-[36px] [&_.rc-picker-cell]:items-center', '[&_.rc-picker-cell-inner]:h-auto [&_.rc-picker-cell-inner]:w-auto [&_.rc-picker-cell-inner]:flex [&_.rc-picker-cell-inner]:items-center [&_.rc-picker-cell-inner]:justify-center', '[&_.rc-picker-cell-in-view_.rc-picker-cell-inner]:text-gray-700', '[&_.rc-picker-cell-inner]:text-xs [&_.rc-picker-cell-inner]:leading-[18px] [&_.rc-picker-cell-inner]:font-medium [&_.rc-picker-cell-inner]:px-1.5 [&_.rc-picker-cell-inner]:py-2', '[&_.rc-picker-cell-disabled_.rc-picker-cell-inner]:cursor-not-allowed', '[&_.rc-picker-footer]:p-[8px_16px] [&_.rc-picker-footer]:border-t [&_.rc-picker-footer]:border-gray-200 [&_.rc-picker-footer]:bg-white', '[&_.rc-picker-now-btn]:text-sm [&_.rc-picker-now-btn]:cursor-pointer [&_.rc-picker-now-btn]:text-primary-500 [&_.rc-picker-now-btn]:font-semibold', '[&_.rc-picker-ok_button]:text-sm [&_.rc-picker-ok_button]:text-primary-500 [&_.rc-picker-ok_button]:font-semibold'));
const IDatePicker = React.forwardRef(({ className, dropdownClassName, picker = 'date', allowClear = {
    clearIcon: jsxRuntime.jsx(react.X, { size: 14, className: "flex-shrink-0" }),
}, onChange: onChangeValue, value, size, variant, disabledDate, getPopupContainer, placeholder = 'Chọn thời gian...', disabled, readOnly, localeConfig, format = 'DD/MM/YYYY', suffixIcon = true, ...props }, ref) => {
    const pickerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => pickerRef.current, []);
    const [_value, setValue] = React.useState(value);
    const localeObject = {
        ...enUS,
        ...(localeConfig ?? {}),
    };
    const onChange = (newValue, newString) => {
        if (Array.isArray(newValue)) {
            setValue(newValue[0]);
            if (onChangeValue) {
                onChangeValue?.(newValue[0], newString);
            }
        }
        else {
            setValue(newValue);
            if (onChangeValue) {
                onChangeValue?.(newValue, newString);
            }
        }
    };
    return (jsxRuntime.jsx(Picker, { ref: pickerRef, value: _value ? dayjs(_value) : undefined, onChange: onChange, generateConfig: dayjsGenerateConfig, locale: localeObject, placeholder: placeholder, format: format, picker: picker, classNames: {
            popup: cn(dropDownVariant$1(), {
                '[&_.rc-picker-ranges]:flex [&_.rc-picker-ranges]:justify-center': props.showNow,
            }, dropdownClassName),
        }, className: cn(iDatePickerVariants({ size, variant }), {
            '[&.rc-picker-disabled]:bg-gray-100 [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-not-allowed [&.rc-picker-disabled_input]:bg-inherit [&.rc-picker-disabled_input]:opacity-50 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-50': Boolean(disabled),
        }, {
            '[&.rc-picker-disabled]:bg-white [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-default [&.rc-picker-disabled_input]:bg-white [&.rc-picker-disabled_input]:opacity-100 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-100': Boolean(readOnly),
        }, className), suffixIcon: suffixIcon && (jsxRuntime.jsx(react.CaretUpDown, { className: cn('flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500', { 'text-gray-700': Boolean(_value) }), size: 18 })), superPrevIcon: jsxRuntime.jsx(react.CaretDoubleLeft, { size: 16, className: "text-current flex-shrink-0", weight: "regular" }), superNextIcon: jsxRuntime.jsx(react.CaretDoubleRight, { size: 16, className: "text-current flex-shrink-0", weight: "regular" }), prevIcon: jsxRuntime.jsx(ssr.CaretLeft, { size: 16, className: "text-current flex-shrink-0", weight: "regular" }), nextIcon: jsxRuntime.jsx(react.CaretRight, { size: 16, className: "text-current flex-shrink-0", weight: "regular" }), disabled: disabled || readOnly, allowClear: allowClear, inputReadOnly: true, disabledDate: disabledDate, getPopupContainer: getPopupContainer, popupAlign: props.popupAlign ?? { offset: [0, -50] }, ...props }));
});
IDatePicker.displayName = 'IDatePicker';const iDateRangePickerVariants = cva(clsx('relative w-full shadow-none', 'group rounded-lg px-4 py-2 text-sm flex items-center gap-2 justify-between text-gray-500 bg-white ', 'hover:ring-2 hover:ring-primary-300 hover:bg-white', 'active:ring-2 active:ring-primary-300 active:bg-white', 'focus-visible:rounded-none focus-visible:border-0 focus-visible:border-none focus-visible:outline-none', 'transition-[box-shadow,border-color] duration-300 ease-in', '[&_.rc-picker-input]:h-full [&_.rc-picker-input]:min-w-[100px] [&_.rc-picker-input]:gap-2', '[&_.rc-picker-clear]:relative [&_.rc-picker-clear]:right-0 [&_.rc-picker-clear]:order-2 [&_.rc-picker-clear]:flex [&_.rc-picker-clear]:items-center', '[&_.rc-picker-suffix]:flex [&_.rc-picker-suffix]:order-3 [&_.rc-picker-suffix]:items-center [&_.rc-picker-suffix]:justify-center [&_.rc-picker-suffix]:bg-inherit', '[&_input]:placeholder:text-gray-500 [&_input]:outline-none [&_input]:text-gray-800 [&_input]:min-w-[80px]', '[&_.rc-picker-range-separator]:flex [&_.rc-picker-range-separator]:items-center [&_.rc-picker-range-separator]:justify-center [&_.rc-picker-range-separator]:px-2 [&_.rc-picker-range-separator]:text-gray-400', '[&_.rc-picker-active-bar]:!hidden', '[&_.rc-picker-range-arrow]:!hidden', '[&_.rc-picker-input-active]:!bg-transparent', '[&_.rc-picker-input]:!bg-transparent', '[&_input]:!bg-transparent'), {
    variants: {
        size: {
            sm: clsx('h-10 min-h-10 [&_input]:placeholder:text-sm [&_input]:text-sm [&_input]:leading-[21px]'),
            md: clsx('h-11 min-h-11 [&_input]:placeholder:text-sm [&_input]:text-sm [&_input]:leading-[21px]'),
            lg: clsx('h-12 min-h-12 [&_input]:placeholder:text-base [&_input]:text-base [&_input]:leading-6'),
        },
        variant: {
            default: clsx('!border !border-gray-200 [&.rc-picker-focused]:!border-primary-500 [&.rc-picker-focused]:ring-2 [&.rc-picker-focused]:ring-primary-300'),
            success: clsx('!border !border-green-500'),
            error: clsx('!border !border-red-500 hover:ring-0 active:ring-0 data-[state=open]:!border-red-500'),
        },
    },
    defaultVariants: {
        size: 'sm',
        variant: 'default',
    },
});
const dropDownVariant = cva(clsx('shadow-md border border-gray-100 rounded-lg overflow-hidden', '[&_.rc-picker-panel]:bg-white [&_.rc-picker-panel]:min-w-[274px] [&_.rc-picker-panel]:border-none [&_.rc-picker-panel]:outline-none', '[&_.rc-picker-date-panel]:px-2 [&_.rc-picker-date-panel]:py-0 [&_.rc-picker-time-panel]:border-l-gray-200', '[&_.rc-picker-content]:w-full [&_.rc-picker-content]:max-h-[250px]', '[&_.rc-picker-header]:p-2 [&_.rc-picker-header]:h-10 [&_.rc-picker-header]:flex-shink-0 [&_.rc-picker-header]:items-center [&_.rc-picker-header]:gap-2', '[&_.rc-picker-header-view]:flex [&_.rc-picker-header-view]:items-center [&_.rc-picker-header-view]:justify-center', '[&_.rc-picker-header-view]:text-primary-500 [&_.rc-picker-header-view]:text-sm [&_.rc-picker-header-view]:leading-[21px] [&_.rc-picker-header-view]:font-semibold', '[&_.rc-picker-month-btn]:mr-1', '[&_th]:min-h-[34px] [&_th]:min-w-[36px] [&_th]:px-1 [&_th]:py-2 [&_th]:text-gray-700 [&_th]:text-xs [&_th]:font-semibold', '[&_.rc-picker-cell]:min-h-[34px] [&_.rc-picker-cell]:min-w-[36px] [&_.rc-picker-cell]:items-center', '[&_.rc-picker-cell-inner]:h-auto [&_.rc-picker-cell-inner]:w-auto [&_.rc-picker-cell-inner]:flex [&_.rc-picker-cell-inner]:items-center [&_.rc-picker-cell-inner]:justify-center', '[&_.rc-picker-cell-in-view_.rc-picker-cell-inner]:text-gray-700', '[&_.rc-picker-cell-inner]:text-xs [&_.rc-picker-cell-inner]:leading-[18px] [&_.rc-picker-cell-inner]:font-medium [&_.rc-picker-cell-inner]:px-1.5 [&_.rc-picker-cell-inner]:py-2', '[&_.rc-picker-cell-disabled_.rc-picker-cell-inner]:cursor-not-allowed', '[&_.rc-picker-footer]:p-[8px_16px] [&_.rc-picker-footer]:border-t [&_.rc-picker-footer]:border-gray-200 [&_.rc-picker-footer]:bg-white', '[&_.rc-picker-now-btn]:text-sm [&_.rc-picker-now-btn]:cursor-pointer [&_.rc-picker-now-btn]:text-primary-500 [&_.rc-picker-now-btn]:font-semibold', '[&_.rc-picker-ok_button]:text-sm [&_.rc-picker-ok_button]:text-primary-500 [&_.rc-picker-ok_button]:font-semibold', '[&_.rc-picker-range-arrow]:!hidden'));
const IDateRangePicker = React.forwardRef(({ className, dropdownClassName, picker = 'date', allowClear = {
    clearIcon: jsxRuntime.jsx(react.X, { size: 14, className: "flex-shrink-0" }),
}, onChange: onChangeValue, value, size, variant, disabledDate, getPopupContainer, placeholder = ['Từ ngày', 'Đến ngày'], disabled, readOnly, localeConfig, format = 'DD/MM/YYYY', suffixIcon = true, ...props }, ref) => {
    const pickerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => pickerRef.current, []);
    const [_value, setValue] = React.useState(value ?? null);
    const localeObject = {
        ...enUS,
        ...(localeConfig ?? {}),
    };
    const onChange = (newValue, newString) => {
        setValue(newValue);
        if (onChangeValue) {
            onChangeValue?.(newValue, newString);
        }
    };
    return (jsxRuntime.jsx(Picker.RangePicker, { ref: pickerRef, value: _value, onChange: onChange, generateConfig: dayjsGenerateConfig, locale: localeObject, placeholder: placeholder, format: format, picker: picker, classNames: {
            popup: cn(dropDownVariant(), dropdownClassName),
        }, className: cn(iDateRangePickerVariants({ size, variant }), {
            '[&.rc-picker-disabled]:bg-gray-100 [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-not-allowed [&.rc-picker-disabled_input]:bg-inherit [&.rc-picker-disabled_input]:opacity-50 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-50': Boolean(disabled),
        }, {
            '[&.rc-picker-disabled]:bg-white [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-default [&.rc-picker-disabled_input]:bg-white [&.rc-picker-disabled_input]:opacity-100 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-100': Boolean(readOnly),
        }, className), suffixIcon: suffixIcon && (jsxRuntime.jsx(react.CaretUpDown, { className: cn('flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500', { 'text-gray-700': Boolean(_value) }), size: 18 })), superPrevIcon: jsxRuntime.jsx(react.CaretDoubleLeft, { size: 16, className: "text-current flex-shrink-0", weight: "regular" }), superNextIcon: jsxRuntime.jsx(react.CaretDoubleRight, { size: 16, className: "text-current flex-shrink-0", weight: "regular" }), prevIcon: jsxRuntime.jsx(ssr.CaretLeft, { size: 16, className: "text-current flex-shrink-0", weight: "regular" }), nextIcon: jsxRuntime.jsx(react.CaretRight, { size: 16, className: "text-current flex-shrink-0", weight: "regular" }), disabled: disabled || readOnly, allowClear: allowClear, inputReadOnly: true, disabledDate: disabledDate, getPopupContainer: getPopupContainer, ...props }));
});
IDateRangePicker.displayName = 'IDateRangePicker';const DatePicker = React.forwardRef(({ className, dropdownClassName, picker = 'date', placeholder = 'Chọn thời gian...', format = 'DD/MM/YYYY', disabled, readOnly, suffixIcon, ...props }, ref) => {
    const pickerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => pickerRef.current, []);
    return (jsxRuntime.jsx(IDatePicker, { ref: pickerRef, placeholder: placeholder, format: format, picker: picker, suffixIcon: suffixIcon, className: cn('relative w-full min-h-[36px] shadow-none border-none', 'group rounded-lg p-2 text-sm flex items-center gap-2 justify-between text-gray-500 bg-white', 'hover:bg-gray-100 hover:ring-0 active:bg-gray-100 [&.rc-picker-focused]:border-0 [&.rc-picker-focused]:bg-gray-100', 'focus-visible:rounded-none focus-visible:border-0 focus-visible:border-none focus-visible:outline-none', 'transition-all duration-300 ease-in', '[&_.rc-picker-input]:h-full [&_.rc-picker-input]:min-w-[150px] [&_.rc-picker-input]:gap-2', '[&_.rc-picker-clear]:relative [&_.rc-picker-clear]:right-0 [&_.rc-picker-clear]:order-2 [&_.rc-picker-clear]:flex [&_.rc-picker-clear]:items-center', '[&_.rc-picker-suffix]:flex [&_.rc-picker-suffix]:order-3 [&_.rc-picker-suffix]:items-center [&_.rc-picker-suffix]:justify-center [&_.rc-picker-suffix]:bg-inherit', '[&_input]:bg-inherit [&_input]:placeholder:text-gray-500 [&_input]:placeholder:text-sm [&_input]:outline-none [&_input]:text-gray-800 [&_input]:min-w-[100px]', {
            '[&.rc-picker-disabled]:bg-gray-100 [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-not-allowed [&.rc-picker-disabled_input]:bg-inherit [&.rc-picker-disabled_input]:opacity-50 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-50': Boolean(disabled),
        }, {
            '[&.rc-picker-disabled]:bg-white [&.rc-picker-disabled]:hover:ring-0 [&.rc-picker-disabled]:cursor-default [&.rc-picker-disabled_input]:bg-inherit [&.rc-picker-disabled_input]:opacity-100 [&.rc-picker-disabled_.rc-picker-suffix]:opacity-100': Boolean(readOnly),
        }, className), dropdownClassName: dropdownClassName, disabled: disabled || readOnly, ...props }));
});
DatePicker.displayName = 'DatePicker';const Form = RCForm;
const FormItem = ({ renderItem, ...propsFormItem }) => {
    return (jsxRuntime.jsx(Form.Field, { ...propsFormItem, children: (control, meta, form) => {
            const isError = (meta.touched || meta.validated || meta.validating) && meta.errors.length > 0;
            return (jsxRuntime.jsxs("div", { className: "flex flex-col gap-2 items-start w-full", children: [renderItem({ control, meta, form, isError }), isError && (jsxRuntime.jsx("span", { className: "block text-sm font-normal text-red-500", children: meta.errors[0] || "" }))] }));
        } }));
};const defaultContextValue = {
    labelAction: {
        create: 'Tạo mới',
        update: 'Cập nhật',
        cancel: 'Huỷ bỏ',
        delete: 'Xóa',
    },
    placeholders: {
        inputTitle: 'Nhập giá trị',
        inputValue: 'Nhập mã giá trị',
        addButton: 'Thêm giá trị',
    },
    errors: {
        inputTitleRequired: 'Giá trị không được để trống.',
        inputValueRequired: 'Mã giá trị không được để trống.',
        inputValueNotMatch: 'Mã giá trị không đúng định dạng.',
        inputValueAlreadyExited: 'Mã giá trị đã tồn tại.',
    },
    valueKeyOption: new Set(),
};
const SingleSelectContext = React.createContext(defaultContextValue);const inputVariants = cva(clsx('group flex items-center gap-2 w-full rounded-lg transition-all duration-300 ease-in '), {
    variants: {
        variant: {
            default: clsx('default bg-white text-gray-800 border border-gray-200 hover:ring-2 hover:ring-primary-300 hover:bg-white active:ring-2 active:ring-primary-300 active:bg-white'),
            success: clsx('success border border-green-500'),
            error: clsx('error border border-red-500'),
        },
        size: {
            sm: clsx('h-10 text-sm leading-[21px]'),
            md: clsx('h-11 text-sm leading-[21px]'),
            lg: clsx('h-12 text-base leading-6'),
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'md',
    },
});
const Input = React__namespace.forwardRef(({ className, type, variant, size, suffix, prefix, clearable = true, placeholder = 'Input', onPressEnter, onSubmitValue, ...props }, ref) => {
    const inputRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(ref, () => inputRef.current, []);
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && onPressEnter) {
            onPressEnter();
        }
    };
    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
            inputRef.current.focus();
            if (onSubmitValue)
                onSubmitValue('');
        }
    };
    const handleOnChange = (event) => {
        if (onSubmitValue)
            onSubmitValue(event.target.value || '');
    };
    return (jsxRuntime.jsxs("div", { className: cn(inputVariants({ variant, size }), type === 'search' ? 'px-3' : 'px-4', {
            'bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0 cursor-not-allowed': props.disabled,
        }, className), children: [jsxRuntime.jsx("input", { type: type === 'search' ? 'text' : type, className: "w-full h-full inline-block bg-transparent outline-none peer placeholder:text-gray-500 disabled:placeholder:text-gray-400 text-gray-800 focus:text-gray-800 disabled:text-gray-400 disabled:!ring-0 disabled:ring-transparent disabled:focus:ring-0 disabled:hover:!ring-0", placeholder: placeholder, onKeyPress: handleKeyPress, ref: inputRef, onChange: handleOnChange, ...props }), prefix && (jsxRuntime.jsx("div", { className: clsx('flex flex-none -order-1 text-gray-500 peer-hover:text-gray-500 peer-[:not(:placeholder-shown)]:text-gray-800', { '!text-gray-400': props.disabled }), children: prefix })), clearable && (jsxRuntime.jsx("span", { onClick: clearInput, className: "visible opacity-100 peer-placeholder-shown:invisible peer-placeholder-shown:opacity-0 peer-disabled-[not(:placeholder-shown)]:invisible peer-disabled-[not(:placeholder-shown)]:opacity-0", children: jsxRuntime.jsx(react.X, { className: "text-gray-500 cursor-pointer", size: 14 }) })), suffix && (jsxRuntime.jsx("div", { className: clsx('flex flex-none peer-hover:text-gray-500 peer-[:placeholder-shown]:hidden peer-disabled-[not(:placeholder-shown)]:hidden', { '!text-gray-400': props.disabled }), children: suffix }))] }));
});
Input.displayName = 'Input';const InputAction = ({ defaultValue = { title: '', value: '' }, onClose, action, onSubmited, state, form, }) => {
    const { placeholders, errors, labelAction, valueKeyOption } = React.useContext(SingleSelectContext);
    const ref = React.useRef(null);
    const inputRef = React.useRef(null);
    const [errorsState, setErrorsState] = React.useState({});
    const [inputTitle, setInputTitle] = React.useState(defaultValue.title);
    const [inputValue, setInputValue] = React.useState(defaultValue.value);
    const [editingItemHeight, setEditingItemHeight] = React.useState(null);
    const options = Form.useWatch('options', form);
    React.useEffect(() => {
        valueKeyOption?.clear();
        options?.forEach((opt) => {
            if (opt.value)
                valueKeyOption?.add(opt.value);
        });
    }, [options, valueKeyOption]);
    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const scrollIntoViewParentWhenError = () => {
        const parentListBox = document.getElementById('parent-listbox');
        const itemElement = ref.current;
        if (action === 'update' && itemElement && parentListBox) {
            const itemRect = itemElement.getBoundingClientRect();
            const parentRect = parentListBox.getBoundingClientRect();
            const itemFullHeight = editingItemHeight || itemRect.height;
            const rangeParentBottom = parentRect.bottom;
            const rangeParentTop = parentRect.top + itemFullHeight * 3;
            if ((itemRect.bottom + itemFullHeight > rangeParentBottom &&
                itemRect.top > rangeParentTop) ||
                itemRect.bottom > rangeParentBottom) {
                parentListBox.scrollTo({
                    top: parentListBox.scrollTop + itemFullHeight,
                    behavior: 'smooth',
                });
            }
        }
    };
    React.useEffect(() => {
        const itemElement = ref.current;
        if (itemElement) {
            const observer = new ResizeObserver((entries) => {
                for (let entry of entries) {
                    setEditingItemHeight(entry.contentRect.height);
                    scrollIntoViewParentWhenError();
                }
            });
            observer.observe(itemElement);
            return () => observer.disconnect();
        }
        return () => { };
    }, [editingItemHeight]);
    return (jsxRuntime.jsx("div", { ref: ref, className: cn('flex flex-col w-full gap-[6px]', {
            'px-2 pb-2': action === 'create',
        }), children: jsxRuntime.jsx("div", { className: "flex flex-row rounded-lg border border-gray-200 transition-all duration-300 ease-in w-full", children: jsxRuntime.jsxs("div", { className: "flex flex-col w-full", children: [jsxRuntime.jsxs("div", { className: "flex flex-col gap-2 px-2 pt-2", children: [jsxRuntime.jsx(Input, { ref: inputRef, name: "title", placeholder: placeholders?.inputTitle, className: cn('bg-inherit focus:bg-inherit', {
                                    'border-red-500 hover:ring-0': errorsState.title && inputTitle.trim().length === 0,
                                }), value: inputTitle, onSubmitValue: (value) => {
                                    setInputTitle(value);
                                    setErrorsState((prev) => ({
                                        ...prev,
                                        title: value.trim().length === 0,
                                    }));
                                }, onBlur: (event) => {
                                    const value = event.currentTarget.value.trim();
                                    if ((!inputValue || inputValue.trim().length === 0) &&
                                        value.length > 0) {
                                        let baseKey = toLowerSnakeCase(value);
                                        let uniqueKey = baseKey;
                                        let counter = 1;
                                        while (valueKeyOption?.has(uniqueKey)) {
                                            // Nếu đã có hậu tố "_1", "_2",... thì bỏ qua hậu tố trước khi thêm cái mới
                                            const match = uniqueKey.match(/^(.*)_(\d+)$/);
                                            if (match) {
                                                baseKey = match[1];
                                            }
                                            uniqueKey = `${baseKey}_${counter}`;
                                            counter++;
                                        }
                                        setInputValue(uniqueKey);
                                    }
                                } }), errorsState.title && (jsxRuntime.jsx("span", { className: "text-red-500 text-sm mx-1", children: errors?.inputTitleRequired }))] }), jsxRuntime.jsxs("div", { className: "flex flex-col gap-2 p-2", children: [jsxRuntime.jsx(Input, { name: "value", placeholder: placeholders?.inputValue, className: cn('flex-shrink-0 bg-inherit focus:bg-inherit', {
                                    'border-red-500 hover:ring-0': (errorsState.value && inputValue.trim().length === 0) ||
                                        (errorsState.format &&
                                            inputValue.trim().length > 0 &&
                                            !REGEX_SNAKE_CASE.test(inputValue)) ||
                                        (errorsState.duplicate && inputValue.trim().length > 0),
                                }), value: inputValue, onSubmitValue: (value) => {
                                    setInputValue(value);
                                    const trimmedValue = value.trim();
                                    const options = form.getFieldValue('options') ?? [];
                                    const count = options.filter((item) => item.value === trimmedValue).length;
                                    setErrorsState((prev) => ({
                                        ...prev,
                                        value: trimmedValue.length === 0,
                                        format: trimmedValue.length > 0 &&
                                            !REGEX_SNAKE_CASE.test(trimmedValue),
                                        duplicate: count >= 1,
                                    }));
                                }, prefix: jsxRuntime.jsx(react.Hash, { size: 16, weight: "regular", className: cn('text-gray-500', {
                                        'text-current': inputValue !== '',
                                    }) }) }), errorsState.value && inputValue.trim().length === 0 && (jsxRuntime.jsx("span", { className: "text-red-500 text-sm mx-1", children: errors?.inputValueRequired })), errorsState.format &&
                                inputValue.trim().length > 0 &&
                                !REGEX_SNAKE_CASE.test(inputValue) && (jsxRuntime.jsx("span", { className: "text-red-500 text-sm mx-1", children: errors?.inputValueNotMatch })), errorsState.duplicate && inputValue.trim().length > 0 && (jsxRuntime.jsx("span", { className: "text-red-500 text-sm mx-1", children: errors?.inputValueAlreadyExited }))] }), jsxRuntime.jsxs("div", { className: "flex flex-row gap-2 px-2 pb-2 w-full justify-between", children: [jsxRuntime.jsx(Button, { variant: "neutral", className: "text-primary-500 w-full bg-gray-100", onClick: () => {
                                    onClose?.();
                                }, children: labelAction?.cancel }), jsxRuntime.jsx(Button, { className: "text-white w-full", onClick: () => {
                                    const title = inputTitle.trim();
                                    const value = inputValue.trim();
                                    const options = form.getFieldValue('options') ?? [];
                                    const count = options.filter((item) => item.value === value && item.value !== state?.itemKey).length;
                                    const newErrors = {};
                                    if (title.length === 0)
                                        newErrors.title = true;
                                    if (value.length === 0)
                                        newErrors.value = true;
                                    if (count > 0)
                                        newErrors.duplicate = true;
                                    else if (!REGEX_SNAKE_CASE.test(value))
                                        newErrors.format = true;
                                    if (Object.keys(newErrors).length > 0) {
                                        setErrorsState(newErrors);
                                        return;
                                    }
                                    setErrorsState({});
                                    onSubmited(inputTitle.trim(), inputValue.trim(), valueKeyOption?.add(inputValue.trim()));
                                    onClose?.();
                                }, children: labelAction?.[action] })] })] }) }) }));
};const SingleSelectItem = ({ item, handleSelect, setOpen, state, setState, onClose, form, currentValue, remove, }) => {
    const { labelAction, onOptionsChange, valueKeyOption } = React.useContext(SingleSelectContext);
    const [isOpenPopover, setIsOpenPopover] = React.useState(false);
    React.useEffect(() => {
        const scrollElement = document.getElementById('parent-listbox');
        if (scrollElement) {
            scrollElement.addEventListener('scroll', () => {
                setIsOpenPopover(false);
            });
        }
    }, []);
    if (state.mode === 'update' && state.itemKey === item.value) {
        return (jsxRuntime.jsx(CommandItem, { value: item.value, className: "w-full hover:!bg-white p-0", children: jsxRuntime.jsx(InputAction, { action: "update", form: form, onClose: onClose, state: { itemKey: item.value, mode: 'update' }, defaultValue: { title: item.title, value: item.value }, onSubmited: (title, value) => {
                    form.setFieldValue(['options', item.id, 'title'], title);
                    form.setFieldValue(['options', item.id, 'value'], value);
                    const options = form.getFieldValue('options') ?? [];
                    onOptionsChange?.(options);
                } }) }));
    }
    return (jsxRuntime.jsxs(CommandItem, { value: item.value, className: cn('gap-3 hover:bg-gray-100 [&:not(.selected)]:hover:bg-gray-100 cursor-pointer', 'flex flex-row min-h-[37px] h-auto items-center p-2', currentValue === item.value && 'bg-gray-100 selected hover:bg-gray-100'), onSelect: () => handleSelect(item), children: [jsxRuntime.jsx("div", { className: "flex-1 min-w-0", children: jsxRuntime.jsx("span", { className: "block text-sm text-left text-gray-700", title: item.title, children: item.title }) }), item.is_modifiable && (jsxRuntime.jsxs(Popover, { open: isOpenPopover, onOpenChange: setIsOpenPopover, children: [jsxRuntime.jsx(PopoverTrigger, { asChild: true, onClick: (event) => {
                            event.stopPropagation();
                            setIsOpenPopover(true);
                        }, children: jsxRuntime.jsx("div", { className: "flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-md cursor-pointer hover:bg-gray-200", children: jsxRuntime.jsx(react.DotsThreeVertical, { className: "text-current", size: 20 }) }) }), jsxRuntime.jsxs(PopoverContent, { className: "max-w-[132px] p-2 z-[101]", align: "center", side: "left", children: [jsxRuntime.jsxs("div", { className: "flex flex-row items-center gap-2 p-2 text-sm text-gray-700 rounded-lg cursor-default hover:bg-gray-100", onClick: (e) => {
                                    e.stopPropagation();
                                    setState({ itemKey: item.value, mode: 'update' });
                                    setOpen(true);
                                    setIsOpenPopover(false);
                                }, children: [jsxRuntime.jsx(react.PencilSimple, { className: "flex-shrink-0 text-current", size: 20, weight: "regular" }), jsxRuntime.jsx("span", { className: "text-current", children: labelAction?.update })] }), jsxRuntime.jsxs("div", { className: "flex flex-row items-center gap-2 p-2 text-red-500 rounded-lg cursor-default hover:bg-gray-100", onClick: (e) => {
                                    e.stopPropagation();
                                    setOpen(true);
                                    remove(+item.id);
                                    const options = form.getFieldValue('options') ?? [];
                                    onOptionsChange?.(options);
                                    onClose();
                                    setIsOpenPopover(false);
                                    valueKeyOption?.delete(item?.value);
                                }, children: [jsxRuntime.jsx(react.Trash, { className: "flex-shrink-0 text-current", size: 20, weight: "regular" }), jsxRuntime.jsx("span", { className: "text-sm text-current", children: labelAction?.delete })] })] })] }))] }));
};function AddNewOption({ setState, state, onAdd, form, onClose, }) {
    const { placeholders, onOptionsChange } = React.useContext(SingleSelectContext);
    if (state.mode === 'create')
        return (jsxRuntime.jsx(InputAction, { action: "create", form: form, state: state, onClose: onClose, onSubmited: (title, value) => {
                onAdd(title, value);
                const options = form.getFieldValue('options');
                onOptionsChange?.(options) ?? [];
            } }));
    return (jsxRuntime.jsxs("div", { onClick: (event) => {
            event.stopPropagation();
            setState({ itemKey: null, mode: 'create' });
        }, className: cn('flex flex-row items-center gap-2 p-2 text-sm cursor-pointer text-primary-500 hover:bg-gray-50 h-11'), children: [jsxRuntime.jsx(react.Plus, { size: 20, weight: "regular", className: "text-current" }), jsxRuntime.jsx("span", { className: "text-current", children: placeholders?.addButton })] }));
}const SingleSelect = React__namespace.forwardRef(({ value = '', onChange, options, prefixes, suffixes, suffixIcon = true, disabled, placeholder = 'Select a item', header, footer, triggerClassName = '', contentClassName = '', customValue, allowClear = false, sideOffset, contentScroll, align = 'start', alignOffset, modalPopover = false, textEmpty = 'Nodata', readOnly, allowAddOptions, optionsContextValue, onOptionsChange, ...props }, ref) => {
    const [open, setOpen] = React__namespace.useState(false);
    const [currentItem, setCurrentItem] = React__namespace.useState(options?.find((option) => option.value === value) ?? null);
    const [stateOptions, setStateOptions] = React__namespace.useState(options ?? []);
    const containerRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(ref, () => containerRef.current, []);
    const [form] = Form.useForm();
    const formOptions = Form.useWatch('options', form) ?? [];
    const [state, setState] = React__namespace.useState({
        itemKey: null,
        mode: 'view',
    });
    React__namespace.useEffect(() => {
        setCurrentItem(options?.find((option) => option.value === value) ?? null);
    }, [value]);
    const onClear = (event) => {
        event.stopPropagation();
        setCurrentItem(null);
        onChange?.('');
    };
    const text = React__namespace.useMemo(() => {
        if (currentItem) {
            return stateOptions.find((option) => option.value === value || option.order === currentItem.order)?.title;
        }
        return placeholder;
    }, [stateOptions, value, currentItem]);
    const handleOpen = (open) => {
        if (disabled || readOnly)
            return;
        setOpen(open);
        setState({
            mode: 'view',
            itemKey: null,
        });
    };
    React__namespace.useEffect(() => {
        setStateOptions(options);
    }, [options]);
    React__namespace.useEffect(() => {
        if (open) {
            setStateOptions(formOptions);
        }
    }, [open, formOptions]);
    const initialValues = React__namespace.useMemo(() => {
        return {
            options,
        };
    }, [options]);
    React__namespace.useEffect(() => {
        form.setFieldsValue(initialValues);
    }, [initialValues]);
    return (jsxRuntime.jsx(SingleSelectContext.Provider, { value: {
            ...defaultContextValue,
            ...optionsContextValue,
            onOptionsChange,
        }, children: jsxRuntime.jsx("div", { ref: containerRef, className: "h-auto w-full relative", ...props, children: jsxRuntime.jsxs(Popover, { open: open, onOpenChange: handleOpen, modal: modalPopover, children: [jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: jsxRuntime.jsxs("button", { role: "combobox", "aria-controls": `${containerRef.current?.id}-listbox`, id: `${containerRef.current?.id}-listbox`, "aria-haspopup": "listbox", "aria-expanded": open, disabled: Boolean(disabled || readOnly), className: cn('group font-normal text-sm leading-[21px] text-gray-500 min-h-[36px] h-auto w-full', 'data-[state=open]:text-gray-800 data-[state=open]:border-primary-200 px-2 outline-none data-[state=open]:bg-gray-100', 'flex flex-1 min-w-0 flex-row gap-2 items-center w-full rounded-lg hover:z-[2]', '[&>span]:line-clamp-1', 'transition-all duration-300 ease-in bg-inherit', 'hover:bg-gray-100', {
                                'bg-white hover:bg-white hover:ring-0 active:ring-0 opacity-50 disabled:cursor-not-allowed ': Boolean(disabled),
                            }, {
                                'bg-white hover:bg-white hover:ring-0 active:ring-0 opacity-100 cursor-default': Boolean(readOnly),
                            }, triggerClassName, currentItem && text && 'text-gray-800'), children: [prefixes && (jsxRuntime.jsx("div", { className: "flex flex-shrink-0 gap-2", children: jsxRuntime.jsx("div", { className: "group-active:text-primary-500 group-disabled:text-gray-400", children: prefixes }) })), jsxRuntime.jsx("span", { className: cn('block flex-1 min-w-0 text-left text-sm leading-[21px] text-gray-700 truncate', {
                                        'text-gray-500': !(currentItem && text),
                                    }), ...(currentItem && text ? { title: text } : {}), children: currentItem && text
                                        ? customValue instanceof Function
                                            ? customValue(currentItem.value, options)
                                            : text
                                        : placeholder }), allowClear && (jsxRuntime.jsx(react.X, { size: 14, className: cn('flex-shrink-0 opacity-0 text-gray-500', allowClear &&
                                        currentItem &&
                                        text &&
                                        'opacity-100 cursor-pointer'), onClick: onClear })), suffixes ? (jsxRuntime.jsx("div", { className: cn('flex-shrink-0 text-gray-500 group-active:text-gray-500 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500', { 'group-disabled:text-gray-400': disabled }, { 'group-disabled:text-gray-500': readOnly }, {
                                        'group-data-[state=open]:text-gray-700 text-gray-700': currentItem && text,
                                    }), children: suffixes })) : (suffixIcon && (jsxRuntime.jsx(react.CaretUpDown, { className: cn('flex-shrink-0 text-gray-500 group-active:text-gray-500 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500', { 'group-disabled:text-gray-400': disabled }, { 'group-disabled:text-gray-500': readOnly }, {
                                        'group-data-[state=open]:text-gray-700 text-gray-700': currentItem && text,
                                    }), size: 18 })))] }) }), jsxRuntime.jsx(PopoverContent, { className: `bg-white border border-gray-100 rounded-xl z-[100] mt-1 p-0 shadow-c5 min-w-[426px] max-w-[var(--radix-popper-anchor-width)] w-auto overflow-auto pointer-events-auto ${contentClassName}`, sideOffset: sideOffset ?? -50, align: align, alignOffset: alignOffset ?? 0, onEscapeKeyDown: () => setOpen(false), children: jsxRuntime.jsx(Form, { name: "form-single-select", form: form, initialValues: initialValues, children: jsxRuntime.jsx(Command, { className: "gap-2 overflow-y-auto", shouldFilter: false, children: jsxRuntime.jsx(Form.List, { name: "options", children: (fields, { add, remove }) => {
                                        return (jsxRuntime.jsxs("div", { children: [fields.length > 0 ? (jsxRuntime.jsx("div", { id: "parent-listbox", ref: (ref) => {
                                                        const elem = ref;
                                                        if (elem) {
                                                            const item = elem.querySelector(`[data-value="${currentItem?.value}"]`);
                                                            if (item) {
                                                                item.scrollIntoView();
                                                            }
                                                        }
                                                    }, className: cn('max-h-64 h-auto overflow-y-auto block', contentScroll), children: jsxRuntime.jsx(CommandGroup, { className: "p-2", children: jsxRuntime.jsx("div", { className: "flex flex-col gap-2", children: fields.map((field) => (jsxRuntime.jsx(SingleSelectItem, { item: {
                                                                    id: field.name,
                                                                    order: formOptions?.[field.name]?.order ??
                                                                        field.name,
                                                                    value: formOptions?.[field.name]?.value ??
                                                                        '',
                                                                    title: formOptions?.[field.name]?.title ??
                                                                        '',
                                                                    is_modifiable: formOptions?.[field.name]
                                                                        ?.is_modifiable ?? false,
                                                                }, handleSelect: (item) => {
                                                                    setCurrentItem(item);
                                                                    setOpen(false);
                                                                    onChange?.(item.value);
                                                                }, setOpen: setOpen, state: state, setState: setState, currentValue: currentItem?.value ?? '', onClose: () => setState({
                                                                    itemKey: null,
                                                                    mode: 'view',
                                                                }), form: form, remove: remove }, field.name))) }) }) })) : (jsxRuntime.jsx("div", { className: "w-full h-full flex items-center justify-center text-center text-sm leading-[21px] text-gray-500 font-normal p-2", children: textEmpty })), allowAddOptions && (jsxRuntime.jsx(AddNewOption, { form: form, setState: setState, state: state, onAdd: (title, value) => {
                                                        add({
                                                            id: Math.random(),
                                                            order: Math.random(),
                                                            title: title,
                                                            value: value,
                                                            is_modifiable: true,
                                                        });
                                                    }, onClose: () => setState({
                                                        itemKey: null,
                                                        mode: 'view',
                                                    }) }, fields.length))] }));
                                    } }) }) }) })] }) }) }));
});
SingleSelect.displayName = 'SingleSelect';const WrapperEditor = React.forwardRef(({ children, className, noStyte, isError, disabled, readOnly, ...props }, ref) => {
    const innerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => innerRef.current, []);
    const styleClass = noStyte
        ? []
        : [
            'border py-[6px] px-2 rounded-lg border-transparent bg-white',
            'hover:bg-gray-100',
            'focus-within:ring-2 focus-within:ring-primary-200',
            'focus-within:hover:bg-white',
            'transition-all duration-300 ease-in-out',
            { 'border-red-500 focus-within:ring-0': isError },
        ];
    return (jsxRuntime.jsx("div", { ref: innerRef, className: cn('min-h-[36px] min-w-[150px] w-full flex flex-row items-center gap-2', ...styleClass, { 'ring-0 opacity-50 hover:bg-transparent': Boolean(disabled) }, { 'ring-0 opacity-100 hover:bg-transparent focus-within:ring-0': Boolean(readOnly) }, { 'border-transparent': noStyte }, className), ...props, children: children }));
});
WrapperEditor.displayName = 'WrapperEditor';const NumberInput = React.forwardRef((props, ref) => {
    const inputRef = React.useRef(null);
    React.useImperativeHandle(ref, () => inputRef.current);
    const { className, disabled, prefixCls, addonBefore, addonAfter, prefix, suffix, readOnly, controls = false, keyboard = false, classNames, placeholder = 'Nhập số...', ...others } = props;
    let upIcon = jsxRuntime.jsx(react.CaretUp, { className: `${prefixCls}-handler-up-inner` });
    let downIcon = jsxRuntime.jsx(react.CaretDown, { className: `${prefixCls}-handler-down-inner` });
    const controlsTemp = typeof controls === 'boolean' ? controls : undefined;
    if (typeof controls === 'object') {
        upIcon =
            typeof controls.upIcon === 'undefined' ? (upIcon) : (jsxRuntime.jsx("span", { className: `${prefixCls}-handler-up-inner`, children: controls.upIcon }));
        downIcon =
            typeof controls.downIcon === 'undefined' ? (downIcon) : (jsxRuntime.jsx("span", { className: `${prefixCls}-handler-down-inner`, children: controls.downIcon }));
    }
    const [currentValue, setCurrentValue] = React.useState(others.value ?? null);
    return (jsxRuntime.jsx(WrapperEditor, { disabled: disabled, isError: others.isError, className: others.classNameWrapper, readOnly: readOnly, children: jsxRuntime.jsx(RcInputNumber, { ...others, ref: inputRef, disabled: disabled, className: cn('peer flex flex-row gap-2 w-full h-full bg-inherit', 'p-0 m-0 border-none border-0 outline-none outline-0', ' [&_.rc-input-number-suffix]:flex-shrink-0 [&_.rc-input-number-suffix]:w-auto [&_.rc-input-number-suffix]:flex [&_.rc-input-number-suffix]:items-center [&_.rc-input-number-suffix]:justify-center', '[&_.rc-input-number]:w-full  [&_.rc-input-number]:flex-1 [&_.rc-input-number]:min-w-0 [&_.rc-input-number]:flex [&_.rc-input-number]:items-center', '[&_input]:w-full [&_input]:bg-inherit [&_input]:text-gray-700 [&_input]:text-sm [&_input]:leading-[21px] [&_input]:outline-0', '[&_input]:focus-visible:border-none [&_input]:focus-visible:border-0 [&_input]:focus-visible:outline-none [&_input]:focus-visible:outline-0', '[&_input]:placeholder:text-sm [&_input]:placeholder:leading-[21px] [&_input]:placeholder:text-gray-500', '[&_.rc-input-number-input-wrap]:flex-1', className), classNames: classNames, upHandler: upIcon, downHandler: downIcon, prefixCls: prefixCls, readOnly: readOnly, controls: controlsTemp, keyboard: keyboard, prefix: prefix, placeholder: placeholder, suffix: jsxRuntime.jsxs("div", { className: "flex flex-row gap-2 items-center", children: [currentValue !== '' &&
                        currentValue !== null &&
                        currentValue !== undefined &&
                        !disabled &&
                        !readOnly && (jsxRuntime.jsx("span", { className: "block cursor-pointer", onClick: () => {
                            others.onChange?.(null);
                            setCurrentValue(null);
                            if (inputRef.current) {
                                inputRef.current.focus();
                            }
                        }, children: jsxRuntime.jsx(react.X, { className: "cursor-pointer text-gray-500", size: 14 }) })), suffix] }), addonBefore: addonBefore, addonAfter: addonAfter, value: currentValue, onChange: (value) => {
                setCurrentValue(value);
                others.onChange?.(value);
            } }) }));
});
NumberInput.displayName = 'NumberInput';const TextareaAutosize = React__namespace.forwardRef(({ onChange = () => { }, isError, classNameRoot, noStyte, rows = 1, readOnly, disabled, placeholder = 'Nhập nội dung...', value, ...props }, userRef) => {
    const textareaRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(userRef, () => textareaRef.current, []);
    const [content, setContent] = React__namespace.useState(value || '');
    React__namespace.useEffect(() => {
        setContent(value || '');
    }, [value]);
    const handleChange = (event) => {
        setContent(event.target.value);
        onChange(event.target.value);
    };
    React__namespace.useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [content]);
    return (jsxRuntime.jsxs(WrapperEditor, { className: classNameRoot, disabled: disabled, isError: isError, noStyte: noStyte, readOnly: readOnly, children: [jsxRuntime.jsx("textarea", { ...props, readOnly: readOnly, disabled: disabled, placeholder: placeholder, className: cn('peer h-auto w-full resize-none text-sm flex-1 text-gray-700 bg-inherit', 'placeholder:text-gray-500', 'focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0', props.className), rows: rows, onChange: handleChange, ref: textareaRef, value: content }), !noStyte && (jsxRuntime.jsx("span", { className: "block peer-placeholder-shown:hidden peer-disabled-[not(:placeholder-shown)]:hidden peer-read-only-[not(:placeholder-shown)]:hidden", onClick: (event) => {
                    if (textareaRef.current) {
                        setContent('');
                        textareaRef.current.value = '';
                        textareaRef.current.focus();
                        handleChange({
                            target: textareaRef.current,
                        });
                    }
                }, children: jsxRuntime.jsx(react.X, { className: "cursor-pointer text-gray-500", size: 14 }) }))] }));
});
TextareaAutosize.displayName = 'TextareaAutosize';const index=/*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({__proto__:null,DatePicker,NumberInput,SingleSelect,TextareaAutosize},Symbol.toStringTag,{value:'Module'}));const Drawer = ({ shouldScaleBackground = true, ...props }) => (jsxRuntime.jsx(vaul.Drawer.Root, { shouldScaleBackground: shouldScaleBackground, ...props }));
Drawer.displayName = "Drawer";
const DrawerTrigger = vaul.Drawer.Trigger;
const DrawerPortal = vaul.Drawer.Portal;
const DrawerClose = vaul.Drawer.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(vaul.Drawer.Overlay, { ref: ref, className: cn("fixed inset-0 z-50 bg-black/80", className), ...props })));
DrawerOverlay.displayName = vaul.Drawer.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(DrawerPortal, { children: [jsxRuntime.jsx(DrawerOverlay, {}), jsxRuntime.jsxs(vaul.Drawer.Content, { ref: ref, className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className), ...props, children: [jsxRuntime.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }), children] })] })));
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("grid gap-1.5 p-4 text-center sm:text-left", className), ...props }));
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn("mt-auto flex flex-col gap-2 p-4", className), ...props }));
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(vaul.Drawer.Title, { ref: ref, className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props })));
DrawerTitle.displayName = vaul.Drawer.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(vaul.Drawer.Description, { ref: ref, className: cn("text-sm leading-[21px] text-gray-500", className), ...props })));
DrawerDescription.displayName = vaul.Drawer.Description.displayName;const DropdownMenu = DropdownMenuPrimitive__namespace.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
const DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
const DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.SubTrigger, { ref: ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm leading-[21px] outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className), ...props, children: [children, jsxRuntime.jsx(react.CaretRight, { className: "ml-auto h-4 w-4" })] })));
DropdownMenuSubTrigger.displayName =
    DropdownMenuPrimitive__namespace.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.SubContent, { ref: ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
DropdownMenuSubContent.displayName =
    DropdownMenuPrimitive__namespace.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Content, { ref: ref, sideOffset: sideOffset, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Item, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm leading-[21px] outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props })));
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.CheckboxItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm leading-[21px] outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked, ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(react.Check, { className: "h-4 w-4" }) }) }), children] })));
DropdownMenuCheckboxItem.displayName =
    DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(DropdownMenuPrimitive__namespace.RadioItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm leading-[21px] outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(react.Circle, { className: "h-2 w-2 fill-current" }) }) }), children] })));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm leading-[21px] font-semibold", inset && "pl-8", className), ...props })));
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
const DropdownMenuShortcut = ({ className, ...props }) => {
    return (jsxRuntime.jsx("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props }));
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";const DefaultEmptyImg = () => {
    return (jsxRuntime.jsxs("svg", { width: "184", height: "152", viewBox: "0 0 184 152", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("title", { children: "empty image" }), jsxRuntime.jsxs("g", { fill: "none", fillRule: "evenodd", children: [jsxRuntime.jsxs("g", { transform: "translate(24 31.67)", children: [jsxRuntime.jsx("ellipse", { fillOpacity: ".8", fill: "#F5F5F7", cx: "67.797", cy: "106.89", rx: "67.797", ry: "12.668" }), jsxRuntime.jsx("path", { d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", fill: "#AEB8C2" }), jsxRuntime.jsx("path", { d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", fill: "url(#linearGradient-1)", transform: "translate(13.56)" }), jsxRuntime.jsx("path", { d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", fill: "#F5F5F7" }), jsxRuntime.jsx("path", { d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", fill: "#DCE0E6" })] }), jsxRuntime.jsx("path", { d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", fill: "#DCE0E6" }), jsxRuntime.jsxs("g", { transform: "translate(149.65 15.383)", fill: "#FFF", children: [jsxRuntime.jsx("ellipse", { cx: "20.654", cy: "3.167", rx: "2.849", ry: "2.815" }), jsxRuntime.jsx("path", { d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" })] })] })] }));
};
const SimpleEmptyImg = () => {
    return (jsxRuntime.jsxs("svg", { width: "64", height: "41", viewBox: "0 0 64 41", xmlns: "http://www.w3.org/2000/svg", children: [jsxRuntime.jsx("title", { children: "Simple Empty" }), jsxRuntime.jsxs("g", { transform: "translate(0 1)", fill: "none", fillRule: "evenodd", children: [jsxRuntime.jsx("ellipse", { fill: "#f5f5f5", cx: "32", cy: "33", rx: "32", ry: "7" }), jsxRuntime.jsxs("g", { fillRule: "nonzero", stroke: "#d9d9d9", children: [jsxRuntime.jsx("path", { d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" }), jsxRuntime.jsx("path", { d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", fill: "#fafafa" })] })] })] }));
};
const defaultEmptyImg = jsxRuntime.jsx(DefaultEmptyImg, {});
const simpleEmptyImg = jsxRuntime.jsx(SimpleEmptyImg, {});
const Empty = ({ className, children, image = defaultEmptyImg, description, imageStyle, ...props }) => {
    let imageNode = null;
    const des = typeof description !== "undefined" ? description : "No data";
    const alt = typeof des === "string" ? des : "empty";
    if (typeof image === "string") {
        imageNode = jsxRuntime.jsx("img", { alt: alt, src: image });
    }
    else {
        imageNode = image;
    }
    return (jsxRuntime.jsxs("div", { className: className, ...props, children: [jsxRuntime.jsx("div", { className: "block h-fit mb-2 [&>svg]:m-auto", style: imageStyle, children: imageNode }), des && jsxRuntime.jsx("div", { className: "block text-center text-sm leading-[21px] text-gray-500", children: des }), children] }));
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;const GroupInput = ({ children }) => {
    return (jsxRuntime.jsx("div", { className: "group flex items-center [&>*]:rounded-none [&>*:last-child]:rounded-e-lg  [&>*:first-child]:rounded-s-lg [&>*:nth-child(n):not(:last-child)]:border-r-0  [&>*:nth-child(n)]:hover:relative ", "data-group": "compact", children: children }));
};const MenubarMenu = MenubarPrimitive__namespace.Menu;
const MenubarGroup = MenubarPrimitive__namespace.Group;
const MenubarPortal = MenubarPrimitive__namespace.Portal;
const MenubarSub = MenubarPrimitive__namespace.Sub;
const MenubarRadioGroup = MenubarPrimitive__namespace.RadioGroup;
const Menubar = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(MenubarPrimitive__namespace.Root, { ref: ref, className: cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className), ...props })));
Menubar.displayName = MenubarPrimitive__namespace.Root.displayName;
const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(MenubarPrimitive__namespace.Trigger, { ref: ref, className: cn("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", className), ...props })));
MenubarTrigger.displayName = MenubarPrimitive__namespace.Trigger.displayName;
const MenubarSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (jsxRuntime.jsxs(MenubarPrimitive__namespace.SubTrigger, { ref: ref, className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground", inset && "pl-8", className), ...props, children: [children, jsxRuntime.jsx(react.CaretRight, { className: "ml-auto h-4 w-4" })] })));
MenubarSubTrigger.displayName = MenubarPrimitive__namespace.SubTrigger.displayName;
const MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(MenubarPrimitive__namespace.SubContent, { ref: ref, className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props })));
MenubarSubContent.displayName = MenubarPrimitive__namespace.SubContent.displayName;
const MenubarContent = React.forwardRef(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (jsxRuntime.jsx(MenubarPrimitive__namespace.Portal, { children: jsxRuntime.jsx(MenubarPrimitive__namespace.Content, { ref: ref, align: align, alignOffset: alignOffset, sideOffset: sideOffset, className: cn("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
MenubarContent.displayName = MenubarPrimitive__namespace.Content.displayName;
const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(MenubarPrimitive__namespace.Item, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className), ...props })));
MenubarItem.displayName = MenubarPrimitive__namespace.Item.displayName;
const MenubarCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (jsxRuntime.jsxs(MenubarPrimitive__namespace.CheckboxItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), checked: checked, ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(react.Check, { className: "h-4 w-4" }) }) }), children] })));
MenubarCheckboxItem.displayName = MenubarPrimitive__namespace.CheckboxItem.displayName;
const MenubarRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(MenubarPrimitive__namespace.RadioItem, { ref: ref, className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(MenubarPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(react.Circle, { className: "h-2 w-2 fill-current" }) }) }), children] })));
MenubarRadioItem.displayName = MenubarPrimitive__namespace.RadioItem.displayName;
const MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => (jsxRuntime.jsx(MenubarPrimitive__namespace.Label, { ref: ref, className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className), ...props })));
MenubarLabel.displayName = MenubarPrimitive__namespace.Label.displayName;
const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(MenubarPrimitive__namespace.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
MenubarSeparator.displayName = MenubarPrimitive__namespace.Separator.displayName;
const MenubarShortcut = ({ className, ...props }) => {
    return (jsxRuntime.jsx("span", { className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className), ...props }));
};
MenubarShortcut.displayname = "MenubarShortcut";const comboboxVariants$1 = cva(clsx('group rounded-lg px-4 py-2 text-sm leading-[21px] flex items-center gap-2 justify-between text-gray-500 bg-white ', 'hover:ring-2 hover:ring-primary-300 hover:bg-white active:ring-2 active:ring-primary-300 active:bg-white', 'data-[state=open]:text-gray-800 data-[state=open]:border-primary-200 relative hover:z-[2]', 'disabled:cursor-not-allowed disabled:ring-0'), {
    variants: {
        variant: {
            default: clsx('border border-gray-200'),
            success: clsx('border border-green-500'),
            error: clsx('border border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500'),
        },
        size: {
            sm: clsx('h-10 min-h-10'),
            md: clsx('h-11 min-h-11'),
            lg: clsx('h-12 min-h-12'),
        },
    },
    defaultVariants: {
        size: 'sm',
        variant: 'default',
    },
});
const MultipleSelectGroup = React__namespace.forwardRef(({ variant, size, onChange, value = [], options, disabled, placeholder = 'Please select data', customValue = () => null, header, footer, searchInputOption = {
    placeholderSearch: 'Search',
    icon: jsxRuntime.jsx(react.MagnifyingGlass, { className: "h-4 w-4 shrink-0 opacity-50" }),
}, sideOffset = -50, align, alignOffset, isSearchable, modalPopover = false, textEmpty, dataEmpty, searchEmpty, }, ref) => {
    const [open, setOpen] = React__namespace.useState(false);
    const [currentValue, setCurrentValue] = React__namespace.useState(value);
    const [search, setSearch] = React__namespace.useState('');
    const containerRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(ref, () => containerRef.current, []);
    React__namespace.useEffect(() => {
        setCurrentValue(value);
    }, [value]);
    const filteredOptions = options.filter((option) => (typeof option.title === 'string' &&
        option.title.toLowerCase().includes(search.toLowerCase())) ||
        (typeof option.email === 'string' &&
            option.email.toLowerCase().includes(search.toLowerCase())));
    const handleSelect = (selectedValue) => {
        if (currentValue.includes(selectedValue)) {
            setCurrentValue(currentValue.filter((val) => val !== selectedValue));
            onChange?.(currentValue.filter((val) => val !== selectedValue));
        }
        else {
            setCurrentValue([...currentValue, selectedValue]);
            onChange?.([...currentValue, selectedValue]);
        }
    };
    const handleRemoveTags = (tagValue) => {
        const newSelectedValues = currentValue.includes(tagValue)
            ? currentValue.filter((value) => value !== tagValue)
            : [...currentValue, tagValue];
        setCurrentValue(newSelectedValues);
        onChange?.(newSelectedValues);
    };
    const currentAccountSelect = options
        .filter((item) => (value.length > 0 ? value : currentValue)?.includes(item?.value))
        .map((r) => r);
    return (jsxRuntime.jsxs("div", { ref: containerRef, className: "h-full w-full relative", children: [jsxRuntime.jsxs(Popover, { open: open, onOpenChange: setOpen, modal: modalPopover, children: [jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: jsxRuntime.jsx("button", { role: "combobox", "aria-expanded": open, disabled: disabled, className: cn(comboboxVariants$1({ variant, size }), currentValue.length > 0 && 'text-gray-800', 'w-full h-auto bg-gray-100 hover:bg-gray-200 hover:ring-0 transition-all duration-300 border-none', {
                                'bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0 active:bg-gray-50': disabled,
                            }), onClick: () => setOpen((prev) => !prev), children: jsxRuntime.jsx("div", { className: "flex gap-2 w-full", children: jsxRuntime.jsx("div", { className: "flex items-center gap-2 flex-wrap w-full", children: jsxRuntime.jsxs("div", { className: "flex justify-center items-center w-full space-x-2", children: [jsxRuntime.jsx(react.UserPlus, { className: "text-primary-500", weight: "regular", size: 20 }), jsxRuntime.jsx("span", { className: "text-primary-500 text-sm font-medium", children: placeholder })] }) }) }) }) }), jsxRuntime.jsx(PopoverContent, { sideOffset: sideOffset, align: align, alignOffset: alignOffset ?? 0, className: "bg-white border border-gray-100 shadow-c5 w-[var(--radix-popper-anchor-width)]", onEscapeKeyDown: () => setOpen(false), children: jsxRuntime.jsxs(Command, { className: "gap-2", shouldFilter: false, children: [isSearchable && (jsxRuntime.jsxs("div", { className: "flex flex-col gap-3 pt-1 px-1", children: [header && jsxRuntime.jsx("div", { children: header }), jsxRuntime.jsx(CommandInput, { value: search, onValueChange: setSearch, icon: searchInputOption?.icon, placeholder: searchInputOption?.placeholderSearch, classNameCustom: "hover:ring-2 hover:ring-primary-300 transition-all duration-300 ease-in" })] })), options.length > 0 ? (filteredOptions.length > 0 ? (jsxRuntime.jsx("div", { className: "max-h-64 h-auto overflow-y-auto", children: jsxRuntime.jsx(CommandGroup, { children: filteredOptions.map((option) => (jsxRuntime.jsx(CommandItem, { value: option.value, className: cn(currentValue.includes(option.value) && 'selected', 'gap-2 hover:bg-gray-100 flex p-2'), onSelect: () => handleSelect(option.value), children: customValue({
                                                id: option.value,
                                                email: option.email,
                                                avatar: option.avatar,
                                            }, options) }, option.value))) }) })) : (searchEmpty)) : (jsxRuntime.jsx("div", { className: "text-center text-sm leading-[21px] text-gray-400", children: textEmpty })), footer && (jsxRuntime.jsx("div", { className: "border-t border-t-gray-200 pt-3", children: footer }))] }) })] }), currentAccountSelect.length > 0 ? (jsxRuntime.jsx("div", { className: "h-[320px] max-h-[325px] overflow-auto border border-gray-200 rounded-xl mt-4", children: currentAccountSelect.map((item) => {
                    return (jsxRuntime.jsxs("div", { className: "flex flex-row gap-3 w-full items-center border-b border-gray-200 py-2 px-3", children: [jsxRuntime.jsx("img", { src: item?.avatar, alt: "avatar", width: 26, height: 26, className: "rounded-full flex-shrink-0" }), jsxRuntime.jsxs("div", { className: "flex flex-col flex-1 w-4/5", children: [jsxRuntime.jsx("span", { className: "line-clamp-1 text-sm text-gray-700", title: item?.title, children: item?.title }), jsxRuntime.jsx("span", { className: "line-clamp-1 text-xs text-gray-700 block text-ellipsis", title: item?.email, children: item.email })] }), jsxRuntime.jsx("button", { className: "bg-gray-100 w-7 h-7 text-gray-700 rounded-[30px] p-1 hover:bg-gray-100", onClick: () => {
                                    handleRemoveTags(item.value);
                                }, type: "button", children: jsxRuntime.jsx(react.X, { name: "X", className: "text-current hover:text-red-500", size: 20 }) })] }, item.value));
                }) })) : (jsxRuntime.jsx("div", { className: "flex border-dashed border-2 border-gray-300 rounded-xl p-5 gap-3 text-center items-center mt-4 h-[320px] max-h-[325px]", children: jsxRuntime.jsxs("div", { className: "flex flex-col gap-3 items-center", children: [jsxRuntime.jsx("img", { width: 120, height: 120, src: dataEmpty?.imageEmpty, alt: "Nh\u00F3m t\u00E0i kho\u1EA3n" }), jsxRuntime.jsxs("div", { className: "flex flex-col items-center", children: [jsxRuntime.jsx("div", { className: "text-base items-center text-gray-700 font-medium", children: dataEmpty?.title }), jsxRuntime.jsx("p", { className: "text-gray-500 text-xs", children: dataEmpty?.description })] })] }) }))] }));
});
MultipleSelectGroup.displayName = 'MultipleSelectGroup';const comboboxVariants = cva(clsx('group w-full rounded-lg px-4 py-2 text-sm leading-[21px] flex items-center gap-2 justify-between text-gray-500 bg-white ', 'hover:ring-2 hover:ring-primary-300 hover:bg-white active:ring-2 active:ring-primary-300 active:bg-white', 'data-[state=open]:text-gray-800 data-[state=open]:border-primary-200 relative hover:z-[2]', 'disabled:cursor-not-allowed disabled:ring-0'), {
    variants: {
        variant: {
            default: clsx('border border-gray-200'),
            success: clsx('border border-green-500'),
            error: clsx('border border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500'),
        },
        size: {
            sm: clsx('h-10 min-h-10'),
            md: clsx('h-11 min-h-11'),
            lg: clsx('h-12 min-h-12'),
        },
    },
    defaultVariants: {
        size: 'sm',
        variant: 'default',
    },
});
const MultipleSelect = React__namespace.forwardRef(({ variant, size, onChange, value = [], options, prefixes, suffixes, disabled, placeholder = 'Please select data', header, footer, searchInputOption = {
    placeholderSearch: 'Search',
    icon: jsxRuntime.jsx(react.MagnifyingGlass, { className: "w-4 h-4 opacity-50 shrink-0" }),
}, maxTagCount = Infinity, sideOffset = -50, align, alignOffset, isSearchable, modalPopover = false, badgePropsItem, textEmpty, customValue, contentClassName, triggerClassName, itemClassName, }, ref) => {
    const [open, setOpen] = React__namespace.useState(false);
    const [currentValue, setCurrentValue] = React__namespace.useState(value);
    const [search, setSearch] = React__namespace.useState('');
    const [dataOptions, setDataOptions] = React__namespace.useState(options ?? []);
    const containerRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(ref, () => containerRef.current, []);
    React__namespace.useEffect(() => {
        setDataOptions(options);
    }, [JSON.stringify(options)]);
    React__namespace.useEffect(() => {
        setCurrentValue(value);
    }, [JSON.stringify(value)]);
    const filteredOptions = React__namespace.useMemo(() => dataOptions.filter((option) => typeof option.title === 'string' && option.title.includes(search)), [search, dataOptions]);
    const handleSelect = (selectedValue) => {
        if (currentValue.includes(selectedValue)) {
            setCurrentValue(currentValue.filter((val) => val !== selectedValue));
            onChange?.(currentValue.filter((val) => val !== selectedValue));
        }
        else {
            setCurrentValue([...currentValue, selectedValue]);
            onChange?.([...currentValue, selectedValue]);
        }
    };
    const handleRemoveTags = (tagValue) => {
        const newSelectedValues = currentValue.includes(tagValue)
            ? currentValue.filter((value) => value !== tagValue)
            : [...currentValue, tagValue];
        setCurrentValue(newSelectedValues);
        onChange?.(newSelectedValues);
    };
    const hasOptionSelected = React__namespace.useMemo(() => {
        return dataOptions.some((option) => currentValue.includes(option.value));
    }, [currentValue, dataOptions]);
    const valueValid = React__namespace.useMemo(() => {
        return currentValue.filter((option) => dataOptions.find((o) => o.value === option));
    }, [currentValue, dataOptions]);
    const isHasValue = React__namespace.useMemo(() => {
        return valueValid.length > 0 && hasOptionSelected;
    }, [valueValid, hasOptionSelected]);
    return (jsxRuntime.jsx("div", { ref: containerRef, className: "relative w-full h-full", children: jsxRuntime.jsxs(Popover, { open: open, onOpenChange: setOpen, modal: modalPopover, children: [jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: jsxRuntime.jsxs("button", { role: "combobox", "aria-expanded": open, disabled: disabled, className: cn(comboboxVariants({ variant, size }), currentValue.length > 0 && 'text-gray-800', {
                            'bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0 active:bg-gray-50': disabled,
                        }, triggerClassName), onClick: () => setOpen((prev) => !prev), children: [jsxRuntime.jsxs("div", { className: "flex flex-1 min-w-0 gap-2", children: [prefixes && (jsxRuntime.jsx("div", { className: "flex gap-2 ", children: jsxRuntime.jsx("div", { className: "group-active:text-primary-500 group-disabled:text-gray-400", children: prefixes }) })), jsxRuntime.jsx("div", { className: "flex flex-wrap items-center gap-2", children: customValue && typeof customValue === 'function' ? (jsxRuntime.jsx("span", { className: "flex gap-2 text-sm text-gray-500", children: isHasValue ? (valueValid.length <= maxTagCount ? (customValue(valueValid, dataOptions, handleRemoveTags)) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [valueValid.slice(0, maxTagCount).map((val) => {
                                                        const currentValueCustom = valueValid.filter((value) => value === val);
                                                        return customValue(currentValueCustom, dataOptions, handleRemoveTags);
                                                    }), jsxRuntime.jsxs(Badge, { ...badgePropsItem, className: cn('shadow-none flex-shrink-0', badgePropsItem?.className), children: ["+", valueValid.length - maxTagCount] })] }))) : (placeholder) })) : isHasValue ? (valueValid.length <= maxTagCount ? (valueValid.map((val) => {
                                            const title = dataOptions.find((option) => option.value === val)?.title;
                                            return title ? (jsxRuntime.jsxs(Badge, { ...badgePropsItem, className: cn('shadow-none max-w-[120px] truncate flex flex-row items-center gap-2', badgePropsItem?.className), children: [jsxRuntime.jsx("span", { className: "flex-1 min-w-0 truncate", children: dataOptions.find((option) => option.value === val)?.title }), !disabled && (jsxRuntime.jsx(react.X, { size: 14, className: "flex-shrink-0 text-current", onClick: (event) => {
                                                            event.stopPropagation();
                                                            handleRemoveTags(val);
                                                        } }))] }, val)) : null;
                                        })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [valueValid.slice(0, maxTagCount).map((val) => {
                                                    const title = dataOptions.find((option) => option.value === val)?.title;
                                                    return title ? (jsxRuntime.jsxs(Badge, { ...badgePropsItem, className: cn('shadow-none max-w-[120px] truncate flex flex-row items-center gap-2', badgePropsItem?.className), children: [jsxRuntime.jsx("span", { className: "flex-1 min-w-0 truncate", children: dataOptions.find((option) => option.value === val)?.title }), !disabled && (jsxRuntime.jsx(react.X, { size: 14, className: "flex-shrink-0 text-current", onClick: (event) => {
                                                                    event.stopPropagation();
                                                                    handleRemoveTags(val);
                                                                } }))] }, val)) : null;
                                                }), jsxRuntime.jsxs(Badge, { ...badgePropsItem, className: cn('shadow-none', badgePropsItem?.className), children: ["+", valueValid.length - maxTagCount] })] }))) : (jsxRuntime.jsx("span", { className: "text-sm text-gray-500", children: placeholder })) })] }), suffixes ? (jsxRuntime.jsx("div", { className: cn('flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500', {
                                    'group-data-[state=open]:text-gray-700 text-gray-700': isHasValue,
                                }), children: suffixes })) : (jsxRuntime.jsx(react.CaretUpDown, { className: cn('flex-shrink-0 text-gray-500 group-active:text-gray-500 group-disabled:text-gray-400 group-placeholder-shown:text-red-500 group-data-[state=open]:text-gray-500', {
                                    'group-data-[state=open]:text-gray-700 text-gray-700': isHasValue,
                                }), size: 18 }))] }) }), jsxRuntime.jsx(PopoverContent, { sideOffset: sideOffset, align: align, alignOffset: alignOffset ?? 0, className: cn('bg-white border border-gray-100 shadow-c5 w-[var(--radix-popper-anchor-width)]', contentClassName), onEscapeKeyDown: () => setOpen(false), children: jsxRuntime.jsxs(Command, { className: "gap-2", shouldFilter: false, children: [isSearchable && (jsxRuntime.jsxs("div", { className: "flex flex-col gap-3", children: [header && jsxRuntime.jsx("div", { children: header }), jsxRuntime.jsx(CommandInput, { value: search, onValueChange: setSearch, icon: searchInputOption?.icon, placeholder: searchInputOption?.placeholderSearch })] })), dataOptions.length > 0 ? (filteredOptions.length > 0 && (jsxRuntime.jsx("div", { className: "h-auto overflow-y-auto max-h-64", children: jsxRuntime.jsx(CommandGroup, { children: filteredOptions.map((option) => (jsxRuntime.jsxs(CommandItem, { value: option.value, disabled: option.disabled, className: cn(valueValid.includes(option.value) && 'selected', 'gap-3 hover:bg-gray-100 cursor-pointer', itemClassName), onSelect: () => handleSelect(option.value), children: [jsxRuntime.jsx("div", { className: cn('w-5 h-5 shrink-0 bg-gray-100 border border-gray-200 rounded group-hover:border-primary-200 flex items-center justify-center', 'group-[&.selected]:bg-primary-500 group-[&.selected]:border-primary-500'), children: jsxRuntime.jsx(react.Check, { className: "hidden group-[&.selected]:block group-[&.selected]:text-white", size: 20 }) }), jsxRuntime.jsx("span", { className: "text-sm text-gray-700", title: option.title, children: option.title })] }, option.value))) }) }))) : (jsxRuntime.jsx("div", { className: "text-center text-sm leading-[21px] text-gray-400", children: textEmpty })), footer && (jsxRuntime.jsx("div", { className: "pt-3 border-t border-t-gray-200", children: footer }))] }) })] }) }));
});
MultipleSelect.displayName = 'MultipleSelect';const inputNumberVariants = cva(clsx("group bg-white flex items-center gap-2.5 w-full pl-4 rounded-lg transition-all duration-300 ease-in overflow-hidden"), {
    variants: {
        variant: {
            default: clsx("default text-gray-800 border border-gray-200 bg-white hover:ring-2 hover:ring-primary-300 hover:bg-white", "active:ring-2 active:ring-primary-300 active:bg-white"),
            success: clsx("success border border-green-500 bg-white"),
            error: clsx("error border border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500"),
        },
        size: {
            sm: clsx("h-10 text-sm leading-[21px]"),
            md: clsx("h-11 text-sm leading-[21px]"),
            lg: clsx("h-12 text-base leading-6"),
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
const InputNumber = React__namespace.forwardRef(({ className, type = "number", variant, size, min, max, icon, placeholder = "", decimal = 10, onSubmitValue, ...props }, ref) => {
    const inputRef = React__namespace.useRef(null);
    React__namespace.useImperativeHandle(ref, () => inputRef.current, []);
    const minusInput = () => {
        if (inputRef.current) {
            let value = parseFloat(inputRef.current.value);
            if (!isNaN(value)) {
                value -= 1;
                if (typeof min === "number" && value < min) {
                    value = min;
                }
                inputRef.current.value = parseFloat(value.toFixed(decimal)).toString()?.trim();
                if (onSubmitValue) {
                    onSubmitValue(parseFloat(value.toFixed(decimal)).toString()?.trim());
                }
            }
        }
    };
    const plusInput = () => {
        if (inputRef.current) {
            let value = parseFloat(inputRef.current.value);
            if (!isNaN(value)) {
                value += 1;
                if (typeof max === "number" && value > max) {
                    value = max;
                }
                inputRef.current.value = parseFloat(value.toFixed(decimal)).toString().trim();
                if (onSubmitValue) {
                    onSubmitValue(parseFloat(value.toFixed(decimal)).toString().trim());
                }
            }
        }
    };
    const handleInputChange = (e) => {
        let { value } = e.target;
        const numericValue = parseFloat(value);
        if (new RegExp(/^-?(\d{1,3}(,\d{3})*)(\.\d{1,3}(,\d{3})*)?$/).test(value)) {
            if (!isNaN(numericValue)) {
                let formatedValue;
                if (typeof min === "number" && numericValue < min) {
                    formatedValue = min;
                }
                if (typeof max === "number" && numericValue > max) {
                    formatedValue = max;
                }
                inputRef.current.value = formatedValue ? formatedValue.toString()?.trim() : value?.trim();
            }
            else {
                inputRef.current.value = "";
            }
        }
        else {
            if (!isNaN(numericValue)) {
                let formatedValue = numericValue;
                if (typeof min === "number" && numericValue < min) {
                    formatedValue = min;
                }
                if (typeof max === "number" && numericValue > max) {
                    formatedValue = max;
                }
                inputRef.current.value = formatedValue ? formatedValue.toString()?.trim() : value?.trim();
            }
            else {
                inputRef.current.value = "";
            }
        }
        if (onSubmitValue) {
            onSubmitValue(inputRef.current.value?.trim() || "");
        }
    };
    return (jsxRuntime.jsxs("div", { className: cn(inputNumberVariants({ variant, size }), "", {
            "bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0 disabled:cursor-not-allowed": props.disabled,
        }, className), children: [jsxRuntime.jsx("input", { type: type, className: cn("w-full h-full inline-block bg-transparent outline-none peer", "placeholder:text-gray-500", "disabled:text-gray-400 disabled:placeholder:text-gray-400", "text-gray-800 focus:text-gray-800 disabled:!ring-0 disabled:ring-transparent disabled:focus:ring-0 disabled:hover:!ring-0"), placeholder: placeholder, ref: inputRef, disabled: props.disabled, onChange: handleInputChange, ...props }), icon && (jsxRuntime.jsx("div", { className: clsx("flex flex-none -order-1 text-gray-500 peer-hover:text-gray-500 peer-[:not(:placeholder-shown)]:text-gray-800", { "!text-gray-400": props.disabled }), children: icon })), jsxRuntime.jsxs("div", { className: "flex justify-center text-center group", onClick: (e) => e.stopPropagation(), children: [jsxRuntime.jsx(Button, { disabled: props.disabled, onClick: minusInput, className: "ring-0 focus:ring-0 focus:bg-gray-100 disabled:!bg-gray-100 disabled:hover:bg-gray-100 disabled:active:bg-gray-100 rounded-none text-xl text-primary-500 border-l border-l-gray-200 disabled:text-gray-700", size: size, icon: true, variant: "gray", type: "button", children: jsxRuntime.jsx(react.Minus, {}) }), jsxRuntime.jsx(Button, { disabled: props.disabled, onClick: plusInput, className: "ring-0 focus:ring-0 focus:bg-gray-100 disabled:!bg-gray-100 disabled:hover:bg-gray-100 disabled:active:bg-gray-100 rounded-none text-xl text-primary-500 border-l border-l-gray-200 disabled:text-gray-700", size: size, icon: true, variant: "gray", type: "button", children: jsxRuntime.jsx(react.Plus, {}) })] })] }));
});
InputNumber.displayName = "InputNumber";const WrapPagination = ({ className, ...props }) => (jsxRuntime.jsx("nav", { role: "navigation", "aria-label": "wrappagination", className: cn("", className), ...props }));
WrapPagination.displayName = "WrapPagination";
const PaginationContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("ul", { ref: ref, className: cn("flex flex-row items-center [&>*]:-ml-[1px]", className), ...props })));
PaginationContent.displayName = "PaginationContent";
const PaginationItem = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx("li", { ref: ref, className: cn("first:[>]:bg-red-500 last:rounded-e-lg", className), ...props })));
PaginationItem.displayName = "PaginationItem";
const PaginationLink = ({ className, isActive, size = "md", ...props }) => (jsxRuntime.jsx("button", { "aria-current": isActive ? "page" : undefined, className: cn(buttonVariants({
        variant: isActive ? "primary" : "neutral",
        size: "sm",
    }), "rounded-none h-9 min-h-9 p-1 min-w-8 border border-gray-200", isActive ? "!text-white !bg-primary-500 " : "", "text-gray-800 font-medium text-xs hover:bg-gray-50 hover:text-gray-900 active:text-white active:bg-primary-500 !ring-0", className), ...props }));
PaginationLink.displayName = "PaginationLink";
const PaginationPrevious = ({ className, children, ...props }) => (jsxRuntime.jsx(PaginationLink, { "aria-label": "Go to previous page", className: cn("text-sm leading-[21px] first:rounded-s-lg min-w-11 disabled:text-gray-400 px-3", className), ...props, children: children }));
PaginationPrevious.displayName = "PaginationPrevious";
const PaginationNext = ({ className, children, ...props }) => (jsxRuntime.jsx(PaginationLink, { "aria-label": "Go to next page", className: cn("text-sm leading-[21px] last:rounded-e-lg min-w-11 disabled:text-gray-400 px-3", className), ...props, children: children }));
PaginationNext.displayName = "PaginationNext";
const PaginationEllipsis = ({ className, ...props }) => (jsxRuntime.jsxs("span", { "aria-hidden": true, className: cn("flex h-9 min-h-9 bg-white min-w-12 items-center justify-center border border-gray-200", className), ...props, children: [jsxRuntime.jsx(react.DotsThree, { size: 24, weight: "bold" }), jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })] }));
PaginationEllipsis.displayName = "PaginationEllipsis";
const Pagination = ({ pageSize, pageIndex, total, prevIcon, nextIcon, delta = 2, showPages = true, onChange, }) => {
    const pageCount = Math.ceil(total / pageSize);
    const pagination = (current, last) => {
        const left = current - delta;
        const right = current + delta + 1;
        const range = [];
        const rangeWithDots = [];
        let l;
        for (let i = 1; i <= last; i++) {
            if (i == 1 || i == last || (i >= left && i < right)) {
                range.push(i);
            }
        }
        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                }
                else if (i - l !== 1) {
                    rangeWithDots.push("...");
                }
            }
            rangeWithDots.push(i);
            l = i;
        }
        return rangeWithDots;
    };
    const pages = pagination(pageIndex, Math.ceil(total / pageSize));
    const handlePrevClick = () => {
        if (pageIndex > 1 && onChange) {
            onChange({ pageSize, pageIndex: pageIndex - 1, total });
        }
    };
    const handleNextClick = () => {
        if (pageIndex < pageCount && onChange) {
            onChange({ pageSize, pageIndex: pageIndex + 1, total });
        }
    };
    const handlePageClick = (page) => {
        if (page !== pageIndex && onChange) {
            onChange({ pageSize, pageIndex: page, total });
        }
    };
    return (jsxRuntime.jsx(WrapPagination, { children: jsxRuntime.jsxs(PaginationContent, { children: [jsxRuntime.jsx(PaginationItem, { children: jsxRuntime.jsx(PaginationPrevious, { className: pageIndex === 1 ? "disabled" : "", onClick: handlePrevClick, disabled: pageIndex === 1, children: prevIcon ?? "Previous" }) }), showPages && (jsxRuntime.jsx(jsxRuntime.Fragment, { children: pages.map((page, index) => (jsxRuntime.jsx(PaginationItem, { children: typeof page === "number" ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsx(PaginationLink, { isActive: page === pageIndex, onClick: () => handlePageClick(page), children: page }) })) : (jsxRuntime.jsx(PaginationEllipsis, {})) }, index))) })), jsxRuntime.jsx(PaginationItem, { children: jsxRuntime.jsx(PaginationNext, { className: pageIndex === pageCount ? "disabled" : "", onClick: handleNextClick, disabled: pageIndex === pageCount, children: nextIcon ?? "Next" }) })] }) }));
};const Progress = React__namespace.forwardRef(({ className, value, ...props }, ref) => (jsxRuntime.jsx(ProgressPrimitive__namespace.Root, { ref: ref, className: cn('relative h-1.5 w-full overflow-hidden rounded-full bg-gray-100', className), ...props, children: jsxRuntime.jsx(ProgressPrimitive__namespace.Indicator, { className: cn('h-full transition-all rounded-full bg-primary-500'), style: { width: `${value || 0}%` } }) })));
Progress.displayName = ProgressPrimitive__namespace.Root.displayName;const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx(RadioGroupPrimitive__namespace.Root, { className: cn("grid gap-2", className), ...props, ref: ref }));
});
RadioGroup.displayName = RadioGroupPrimitive__namespace.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
    return (jsxRuntime.jsx(RadioGroupPrimitive__namespace.Item, { ref: ref, className: cn("aspect-square h-4 w-4 rounded-full border border-primary-500 text-primary-500 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className), ...props, children: jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: jsxRuntime.jsx(react.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) }) }));
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;const ScrollArea = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(ScrollAreaPrimitive__namespace.Root, { ref: ref, className: cn("relative overflow-hidden", className), ...props, children: [jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Viewport, { className: "h-full w-full rounded-[inherit]", children: children }), jsxRuntime.jsx(ScrollBar, {}), jsxRuntime.jsx(ScrollAreaPrimitive__namespace.Corner, {})] })));
ScrollArea.displayName = ScrollAreaPrimitive__namespace.Root.displayName;
const ScrollBar = React__namespace.forwardRef(({ className, orientation = "vertical", ...props }, ref) => (jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaScrollbar, { ref: ref, orientation: orientation, className: cn("flex touch-none select-none transition-colors bg-gray-100", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className), ...props, children: jsxRuntime.jsx(ScrollAreaPrimitive__namespace.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-primary-500" }) })));
ScrollBar.displayName = ScrollAreaPrimitive__namespace.ScrollAreaScrollbar.displayName;const Select = SelectPrimitive__namespace.Root;
const SelectGroup = SelectPrimitive__namespace.Group;
const SelectValue = SelectPrimitive__namespace.Value;
const selectTriggerVariants = cva(clsx("group font-normal bg-white border text-sm leading-[21px] text-gray-500", "data-[state=open]:text-gray-800 data-[state=open]:border-primary-200", "px-4 outline-none flex w-full items-center justify-between rounded-lg hover:z-[2]", "disabled:cursor-not-allowed disabled:ring-0 [&>span]:line-clamp-1 transition-all duration-300 ease-in"), {
    variants: {
        variant: {
            default: clsx("border-gray-200 bg-white hover:ring-2 hover:ring-primary-300 active:ring-primary-200 "),
            success: clsx("border-green-500"),
            error: clsx("border-red-500 hover:ring-0 active:ring-0 data-[state=open]:border-red-500"),
        },
        size: {
            sm: clsx("h-10 "),
            md: clsx("h-11"),
            lg: clsx("h-12"),
        },
    },
    defaultVariants: {
        size: "sm",
        variant: "default",
    },
});
const SelectTrigger = React__namespace.forwardRef(({ className, children, variant, size, prefixes, suffixes, allowClear, ...props }, ref) => (jsxRuntime.jsxs(SelectPrimitive__namespace.Trigger, { ref: ref, className: cn(selectTriggerVariants({ variant, size }), { "bg-gray-50 hover:bg-gray-50 hover:ring-0 active:ring-0": props.disabled }, className), ...props, children: [prefixes ? (jsxRuntime.jsxs("div", { className: "flex gap-2 [&>span]:line-clamp-1 ", children: [jsxRuntime.jsx("div", { className: "text-gray-400 group-active:text-gray-700 group-disabled:text-gray-400", children: prefixes }), children] })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: children })), jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: suffixes ? (jsxRuntime.jsx("div", { className: "text-gray-700 group-active:text-gray-700 group-disabled:text-gray-400", children: suffixes })) : (jsxRuntime.jsx(react.CaretUpDown, { className: "text-gray-700 group-active:text-gray-700 group-disabled:text-gray-400", size: 18 })) })] })));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
const SelectScrollUpButton = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.ScrollUpButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: jsxRuntime.jsx(react.ArrowUp, { className: "h-4 w-4" }) })));
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
const SelectScrollDownButton = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.ScrollDownButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: jsxRuntime.jsx(react.ArrowDown, { className: "h-4 w-4" }) })));
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
const SelectContent = React__namespace.forwardRef(({ className, children, position = "popper", ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: jsxRuntime.jsxs(SelectPrimitive__namespace.Content, { ref: ref, className: cn("relative z-50 bg-white max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-gray-100 p-0 shadow-c5 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position, ...props, children: [jsxRuntime.jsx(SelectScrollUpButton, {}), jsxRuntime.jsx(SelectPrimitive__namespace.Viewport, { className: cn("p-4", position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: children }), jsxRuntime.jsx(SelectScrollDownButton, {})] }) })));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
const SelectLabel = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Label, { ref: ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props })));
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
const SelectItem = React__namespace.forwardRef(({ className, children, suffixItemRight, suffixItemLeft, ...props }, ref) => {
    return (jsxRuntime.jsxs(SelectPrimitive__namespace.Item, { ref: ref, className: cn("relative aria-selected:bg-primary-500 flex gap-3 items-center rounded-lg p-3 text-sm w-full cursor-default select-none outline-none aria-selected:text-white", "hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:bg-white data-[disabled]:opacity-50", className), ...props, children: [suffixItemLeft && jsxRuntime.jsx("span", { className: "text-left", children: suffixItemLeft }), jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children: children })] }));
});
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
const SelectSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;const Separator = React.forwardRef(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (jsxRuntime.jsx(SeparatorPrimitive__namespace.Root, { ref: ref, decorative: decorative, orientation: orientation, className: cn('shrink-0 bg-border', orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]', className), ...props })));
Separator.displayName = SeparatorPrimitive__namespace.Root.displayName;const Sheet = DialogPrimitive__namespace.Root;
const SheetTrigger = DialogPrimitive__namespace.Trigger;
const SheetClose = DialogPrimitive__namespace.Close;
const SheetPortal = DialogPrimitive__namespace.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Overlay, { className: cn('fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className), ...props, ref: ref })));
SheetOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
const sheetVariants = cva('fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500', {
    variants: {
        side: {
            top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
            bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
            left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
            right: 'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        },
    },
    defaultVariants: {
        side: 'right',
    },
});
const SheetContent = React.forwardRef(({ side = 'right', className, children, ...props }, ref) => (jsxRuntime.jsxs(SheetPortal, { children: [jsxRuntime.jsx(SheetOverlay, {}), jsxRuntime.jsx(DialogPrimitive__namespace.Content, { ref: ref, className: cn(sheetVariants({ side }), className), ...props, children: children })] })));
SheetContent.displayName = DialogPrimitive__namespace.Content.displayName;
const SheetHeader = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn('flex flex-col space-y-2 text-center sm:text-left', className), ...props }));
SheetHeader.displayName = 'SheetHeader';
const SheetFooter = ({ className, ...props }) => (jsxRuntime.jsx("div", { className: cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className), ...props }));
SheetFooter.displayName = 'SheetFooter';
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Title, { ref: ref, className: cn('text-lg font-semibold text-foreground', className), ...props })));
SheetTitle.displayName = DialogPrimitive__namespace.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(DialogPrimitive__namespace.Description, { ref: ref, className: cn('text-sm text-muted-foreground', className), ...props })));
SheetDescription.displayName = DialogPrimitive__namespace.Description.displayName;function Skeleton({ className, ...props }) {
    return (jsxRuntime.jsx("div", { className: cn("animate-pulse rounded-md bg-muted", className), ...props }));
}const spinnerVariants = cva(clsx('flex flex-shrink-0 animate-spinerCircle rounded-full'), {
    variants: {
        variant: {
            primary: clsx('border-4 border-gray-200 border-t-primary-500 '),
            secondary: clsx('border-4 border-white border-t-primary-500'),
        },
        size: {
            xs: 'w-[18px] h-[18px]',
            sm: 'w-7 h-7',
            md: 'w-12 h-12 ',
            l: 'w-[68px] h-[68px]',
            lg: 'w-[100px] h-[100px]',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
});
const Spinner = React__namespace.forwardRef(({ className, variant, size, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { className: cn(spinnerVariants({ variant, size, className })), ref: ref, ...props }));
});
Spinner.displayName = 'Spinner';const SpinVariants = cva(clsx('absolute top-0 left-0 right-0 bottom-0 bg-white-50 z-20 ', 'flex items-center justify-center'));
// const SpinnerVariants = cva(clsx('spinner grid bg-transparent'), {
//   variants: {
//     size: {
//       sm: 'w-10 h-10 after:bg-spin-sm-after before:bg-spin-sm-before before:m-[3.2px]',
//       md: 'w-14 h-14 after:bg-spin-md-after before:bg-spin-md-before before:m-[4.5px]',
//       lg: 'w-18 h-18 after:bg-spin-lg-after before:bg-spin-lg-before before:m-[5.8px]',
//     },
//     speed: {
//       slow: 'after:animate-animate-spin-avg before:animate-animate-spin-avg-linear',
//       avg: 'after:animate-animate-spin-avg before:animate-animate-spin-avg-linear',
//       fast: 'after:animate-animate-spin-fast before:animate-animate-spin-fast-linear',
//     },
//   },
//   defaultVariants: {
//     size: 'md',
//     speed: 'avg',
//   },
// });
const Spin = ({ loading, className, children, fullScreen, size, }) => {
    if (fullScreen)
        return (jsxRuntime.jsx("div", { className: cn(SpinVariants(), { hidden: !loading }, className), children: jsxRuntime.jsx(Spinner, {}) }));
    return (jsxRuntime.jsxs("div", { className: cn('h-full w-full relative', className), children: [loading && (jsxRuntime.jsx("div", { className: cn(SpinVariants()), children: jsxRuntime.jsx(Spinner, { size: size }) })), children] }));
};const VariantSwitch = cva(clsx('peer inline-flex shrink-0 cursor-pointer items-center rounded-full', 'border-2 border-transparent transition-colors', 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', 'focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-gray-300'), {
    variants: {
        size: {
            sm: 'h-5 w-10',
            md: 'h-6 w-11',
            lg: 'h-7 w-14',
        },
    },
    defaultVariants: {
        size: 'md',
    },
});
const thumbVariants = cva(clsx('pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0'), {
    variants: {
        size: {
            sm: 'h-4 w-4 data-[state=checked]:translate-x-5',
            md: 'h-5 w-5 data-[state=checked]:translate-x-5',
            lg: 'h-6 w-6 data-[state=checked]:translate-x-7',
        },
    },
    defaultVariants: {
        size: 'md',
    },
});
const Switch = React__namespace.forwardRef(({ className, size, ...props }, ref) => (jsxRuntime.jsx(SwitchPrimitives__namespace.Root, { className: cn(VariantSwitch({ size }), className), ...props, ref: ref, children: jsxRuntime.jsx(SwitchPrimitives__namespace.Thumb, { className: cn(thumbVariants({ size })) }) })));
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;const tableStyles = {
    table: "[&_.rc-table-content]:overflow-x-auto [&_table]:w-full [&_.rc-table-row]:border-y [&_.rc-table-row]:border-y-gray-200 overflow-hidden",
    thead: "[&_thead]:text-left [&_thead]:rtl:text-right [&_th.rc-table-cell]:uppercase [&_th.rc-table-cell]:text-xs [&_th.rc-table-cell]:font-semibold [&_th.rc-table-cell]:text-gray-700 [&_th.rc-table-cell]:tracking-wide [&_thead]:bg-gray-50 [&_thead]:border-y [&_thead]:border-y-gray-200",
    tCell: "[&_.rc-table-cell]:p-4 [&_th.rc-table-cell]:p-4 [&_td.rc-table-cell]:p-4 [&_td.rc-table-cell]:font-normal [&_td.rc-table-cell]:text-sm [&_td.rc-table-cell]:leanding-[21px] [&_td.rc-table-cell]:text-gray-800",
    //     "[&_thead]:bg-red-500  [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted [&_thead]:border-y [&_thead]:border-muted",
    variants: {
        classic: "",
        // "[&_thead]:bg-red-500  [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted [&_thead]:border-y [&_thead]:border-muted",
        modern: "",
        // "[&_thead]:bg-muted/50 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted",
        minimal: "",
        // "[&_thead]:bg-muted/50",
        elegant: "",
        // "[&_thead]:border-y [&_thead]:border-muted [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-muted",
    },
    striped: "[&_.rc-table-row:nth-child(2n)_.rc-table-cell]:bg-gray-50",
    striped_column: "[&_.rc-table-cell:nth-child(2n)]:bg-gray-50",
};
function Table({ striped, variant = "classic", emptyText, className, pagination, checkable, selectedRowKeys = [], onSelectAllRows, onSelectRow, ...props }) {
    const handleSelectAllRows = (checked) => {
        if (checked) {
            onSelectAllRows?.(true);
        }
        else {
            onSelectAllRows?.(false);
        }
    };
    const handleSelectRow = (id, checked) => {
        onSelectRow?.(id, checked);
    };
    const columnsWithCheck = checkable
        ? [
            {
                title: (jsxRuntime.jsx(Checkbox, { checked: selectedRowKeys.length === props.data.length
                        ? true
                        : selectedRowKeys.length === 0
                            ? false
                            : "indeterminate", onCheckedChange: (checked) => handleSelectAllRows(checked) })),
                key: "checkbox",
                fixed: "left",
                width: 50,
                render: (_, record) => (jsxRuntime.jsx("div", { className: "inline-flex cursor-pointer", children: jsxRuntime.jsx(Checkbox, { checked: selectedRowKeys.includes(record.key), onCheckedChange: (checked) => handleSelectRow(record.key, checked) }) })),
            },
            ...props.columns,
        ]
        : props.columns;
    return (jsxRuntime.jsx(RCTable, { className: cn(tableStyles.table, tableStyles.thead, tableStyles.tCell, tableStyles.variants[variant], striped
            ? striped === "row"
                ? tableStyles.striped
                : striped === "column"
                    ? tableStyles.striped_column
                    : ""
            : "", className), emptyText: emptyText ?? "Empty", ...props, columns: columnsWithCheck, footer: () => {
            if (!pagination)
                return null;
            return (jsxRuntime.jsx("div", { className: "bg-gray-50 p-4 border-t border-t-gray ", children: jsxRuntime.jsxs("div", { className: "flex justify-between items-center", children: [jsxRuntime.jsxs("div", { className: "font-normal text-sm", children: ["Showing", jsxRuntime.jsxs("strong", { children: [(pagination.pageIndex - 1) * pagination.pageSize + 1, " -", pagination.pageIndex * pagination.pageSize] }), "of ", jsxRuntime.jsx("strong", { children: pagination.total })] }), jsxRuntime.jsx(Pagination, { ...pagination })] }) }));
        } }));
}
Table.displayName = "Table";function Tabs({ className, ...props }) {
    return (jsxRuntime.jsx(TabsPrimitive__namespace.Root, { "data-slot": "tabs", className: cn('flex flex-col gap-2', className), ...props }));
}
function TabsList({ className, ...props }) {
    return (jsxRuntime.jsx(TabsPrimitive__namespace.List, { "data-slot": "tabs-list", className: cn('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className), ...props }));
}
function TabsTrigger({ className, ...props }) {
    return (jsxRuntime.jsx(TabsPrimitive__namespace.Trigger, { "data-slot": "tabs-trigger", className: cn("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props }));
}
function TabsContent({ className, ...props }) {
    return (jsxRuntime.jsx(TabsPrimitive__namespace.Content, { "data-slot": "tabs-content", className: cn('flex-1 outline-none', className), ...props }));
}const Toaster = ({ ...props }) => {
    return (jsxRuntime.jsx(sonner.Toaster, { ...props, className: cn('max-w-full !w-auto !min-h-[56px] !h-auto whitespace-nowrap', props.className), toastOptions: {
            classNames: {
                toast: clsx('flex items-center justify-center w-auto whitespace-nowrap', 'data-[x-position=right]:right-0', 'data-[x-position=left]:left-0', 'data-[x-position=center]:left-1/2 data-[x-position=center]:right-1/2', props.toastOptions?.classNames?.toast),
                ...props.toastOptions?.classNames,
            },
            style: {
                '--mobile-offset-left': '0',
                '--mobile-offset-right': '0',
                ...props.toastOptions?.style,
            },
        } }));
};
const toastVariants = cva(clsx('flex p-3 w-auto h-full items-start gap-3 rounded-lg bg-white shadow-c7'), {
    variants: {
        variant: {
            success: clsx('[&>.icon]:bg-green-50 text-green-600'),
            error: clsx('[&>.icon]:bg-red-50 text-red-600'),
            warning: clsx('[&>.icon]:bg-yellow-50 text-yellow-600'),
            info: clsx('[&>.icon]:bg-primary-50 text-primary-600'),
        },
    },
    defaultVariants: {
        variant: 'info',
    },
});
const toast = ({ options, type, title, description, iconClose = true, isShowIcon = true, className, loading, classNameContent, classNameTitleBox, }) => {
    const Iicon = {
        success: jsxRuntime.jsx(react.Check, { size: 20 }),
        error: jsxRuntime.jsx(react.WarningCircle, { size: 20 }),
        warning: jsxRuntime.jsx(react.Warning, { size: 20 }),
        info: jsxRuntime.jsx(react.Info, { size: 20 }),
    };
    if (type) {
        sonner.toast.custom((t) => (jsxRuntime.jsxs("div", { className: cn(toastVariants({ variant: type }), { 'items-center': !description }, className), children: [isShowIcon &&
                    (loading ? (loading) : (jsxRuntime.jsx("div", { className: "icon flex w-8 h-8 p-1.5 justify-center items-center flex-shrink-0 rounded-lg", children: Iicon[type] }))), jsxRuntime.jsxs("div", { className: cn('flex flex-1 min-w-0 flex-col gap-1', classNameContent), children: [jsxRuntime.jsxs("div", { className: cn('flex flex-row gap-3 items-center', classNameTitleBox), children: [typeof title === 'string' ? (jsxRuntime.jsx("div", { className: "flex flex-col gap-1", children: jsxRuntime.jsx("span", { className: cn('text-sm leading-[21px] not-italic font-semibold', {
                                            'font-normal': !description && !isShowIcon,
                                        }), children: title }) })) : (title), options?.action &&
                                    (typeof options.action === 'object' &&
                                        'onClick' in options.action ? (jsxRuntime.jsx(Button, { size: "sm", className: "flex-shrink-0", onClick: options.action.onClick, style: options.action.actionButtonStyle, children: options.action.label })) : (options.action))] }), description ? (typeof description === 'string' ? (jsxRuntime.jsx("span", { className: "text-gray-700 text-sm leading-[21px] not-italic font-normal", children: description })) : (description)) : null] }), iconClose && (jsxRuntime.jsx(Button, { size: "sm", shape: "circle", icon: true, variant: "neutral", className: "flex-shrink-0 w-6 h-6 p-1 text-gray-800 min-h-6 min-w-6", onClick: () => sonner.toast.dismiss(t), children: jsxRuntime.jsx(react.X, { size: 24 }) }))] })), options);
    }
    return null;
};const TooltipProvider = TooltipPrimitive__namespace.Provider;
const Tooltip = TooltipPrimitive__namespace.Root;
const TooltipTrigger = TooltipPrimitive__namespace.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: jsxRuntime.jsx(TooltipPrimitive__namespace.Content, { ref: ref, sideOffset: sideOffset, className: cn('z-50 overflow-hidden rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-700 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2', className), ...props }) })));
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;const cleanObject = (obj) => {
    const result = {};
    if (obj) {
        Object.keys(obj).forEach((key) => {
            if ((!Array.isArray(obj[key]) && obj[key]) || typeof obj[key] === "number" || obj[key]?.length)
                result[key] = obj[key];
        });
    }
    return result;
};
const TreeSelect = React.forwardRef(({ treeData, defaultKeyOpen = [], defaultSelectedRowKeys = [], onChange, className, ...props }, ref) => {
    const [_, setSelectedRowKeys] = React.useState(defaultSelectedRowKeys || []);
    const [treeNode, setTreeNode] = React.useState(treeData);
    // Function to initialize state with default keys
    React.useEffect(() => {
        const newTree = updateTreeWithChecked(treeData, new Set(defaultSelectedRowKeys));
        setTreeNode(newTree);
    }, [defaultSelectedRowKeys]);
    const updateTreeWithChecked = (nodes, checkedKeys) => {
        return nodes.map((node) => {
            const isChecked = checkedKeys.has(node.value);
            if (node.children && node.children.length > 0) {
                const updatedChildren = updateTreeWithChecked(node.children, checkedKeys);
                const allChecked = updatedChildren.every((child) => child.checked === true);
                const someChecked = updatedChildren.some((child) => child.checked === true || child.checked === "indeterminate");
                return {
                    ...node,
                    checked: allChecked ? true : someChecked ? "indeterminate" : false,
                    children: updatedChildren,
                };
            }
            return {
                ...node,
                checked: isChecked,
            };
        });
    };
    const updateTree = (nodes, value, checked) => {
        return nodes.map((node) => {
            if (node.value === value) {
                return { ...node, checked, children: updateTreeRecursively(node.children, checked) };
            }
            if (node.children && node.children.length > 0) {
                const updatedChildren = updateTree(node.children, value, checked);
                const allChecked = updatedChildren.every((child) => child.checked === true) || false;
                const someChecked = updatedChildren.some((child) => child.checked === true || child.checked === "indeterminate") || false;
                return {
                    ...node,
                    checked: allChecked ? true : someChecked ? "indeterminate" : false,
                    children: updatedChildren,
                };
            }
            return { ...node };
        });
    };
    const updateTreeRecursively = (nodes, checked) => {
        return nodes?.map((node) => cleanObject({
            ...node,
            checked: node.hidden ? node.checked : checked,
            indeterminate: false,
            children: node.children ? updateTreeRecursively(node.children, checked) : [],
        }));
    };
    const onSelect = (checked, value) => {
        const updateTreeNode = updateTree(treeNode, value, checked);
        setTreeNode(updateTreeNode);
        const updatedCheckedKeys = getCheckedIds(updateTreeNode);
        setSelectedRowKeys(updatedCheckedKeys);
        onChange && onChange(updatedCheckedKeys);
    };
    const getCheckedIds = (nodes) => {
        let checkedIds = [];
        nodes.forEach((node) => {
            if (node.checked === true) {
                checkedIds.push(node.value);
            }
            if (node.children && node.children.length > 0) {
                checkedIds = checkedIds.concat(getCheckedIds(node.children));
            }
        });
        return checkedIds;
    };
    return (jsxRuntime.jsx("div", { className: cn("w-full flex flex-col gap-3", className), ref: ref, children: treeNode.map((node) => (jsxRuntime.jsx(TreeNode, { record: node, onSelect: onSelect, defaultKeyOpen: defaultKeyOpen, ...props }, node.value))) }));
});
const TreeNode = React.forwardRef(({ record, onSelect, defaultKeyOpen = [], selectedRowKeys = [], asChild = false, onClickLabel, ...propsNodeAccordion }, ref) => {
    const [openKey, setOpenKey] = React.useState(defaultKeyOpen);
    const [checkedCount, setCheckedCount] = React.useState(0);
    const handleOpen = (value) => {
        setOpenKey((prev) => {
            const openSet = new Set(prev);
            if (openSet.has(value)) {
                openSet.delete(value);
            }
            else {
                openSet.add(value);
            }
            return Array.from(openSet);
        });
    };
    React.useEffect(() => {
        const countCheckedChildren = (children) => {
            return children.reduce((count, child) => {
                if (child.checked === true)
                    count += 1;
                return count;
            }, 0);
        };
        if (record.children && record.children.length > 0) {
            setCheckedCount(countCheckedChildren(record.children));
        }
    }, [record.children]);
    if (record.hidden) {
        return null;
    }
    return (jsxRuntime.jsxs(Accordion, { ref: ref, open: record.children && openKey.includes(record.value), icon: record.children && record.children.length > 0, asChild: asChild, ...propsNodeAccordion, children: [jsxRuntime.jsxs(Accordion.Header, { onClick: () => handleOpen?.(record.value), asChild: asChild, children: [jsxRuntime.jsx("div", { className: "flex-1 flex items-center gap-3", onClick: (event) => {
                            event.stopPropagation();
                        }, children: jsxRuntime.jsx("div", { className: "flex-1", onClick: (event) => {
                                event.stopPropagation();
                                handleOpen?.(record.value);
                            }, children: jsxRuntime.jsxs("label", { className: "flex flex-row items-center gap-3 w-max text-start font-medium text-gray-800 text-base leading-6 cursor-pointer", onClick: (event) => event.stopPropagation(), children: [jsxRuntime.jsx(Checkbox, { className: cn("flex-shrink-0", { "opacity-50": record.isControl }), id: `${record.value}`, checked: record.checked, disabled: record.disabled, onCheckedChange: (checked) => onSelect?.(checked, record.value) }), record.label] }) }) }), record.children && record.children.length > 0 && (jsxRuntime.jsx(Badge, { variant: checkedCount === 0 ? 'secondary' : 'default', className: "flex-shrink-0 shadow-none min-w-10 flex justify-center items-start px-0", children: jsxRuntime.jsxs("span", { className: "text-sm leading-[21px] font-medium text-center", children: [checkedCount, "/", record.children.length] }) }))] }), record.children && record.children?.length > 0 && (jsxRuntime.jsx(Accordion.Body, { asChild: record.children.some((r) => !r.children), children: record.children.map((r) => {
                    if (r.hidden)
                        return null;
                    return (jsxRuntime.jsx(TreeNode, { record: r, onSelect: onSelect, defaultKeyOpen: defaultKeyOpen, asChild: !(r.children && r.children?.length > 0) }, r.value));
                }) }))] }));
});
TreeNode.displayName = "TreeNode";
TreeSelect.displayName = "TreeSelect";
const TreeField = ({ value = [], onChange, data, className, }) => {
    const [checkedKeys, setCheckedKeys] = React.useState(value);
    React.useEffect(() => {
        setCheckedKeys(value);
    }, [value]);
    const handleChange = (newCheckedKeys) => {
        let updatedCheckedKeys = [...newCheckedKeys];
        const applyIsControl = (nodes) => {
            nodes.forEach((node) => {
                if (node.children) {
                    const childCheckedKeys = node.children
                        .filter(child => !child.hidden)
                        .map((child) => child.value);
                    const anyChildChecked = childCheckedKeys.some((key) => updatedCheckedKeys.includes(key));
                    if (anyChildChecked) {
                        node.children.forEach((child) => {
                            if (child.isControl && !child.hidden && !updatedCheckedKeys.includes(child.value)) {
                                updatedCheckedKeys.push(child.value);
                            }
                        });
                    }
                    applyIsControl(node.children);
                }
            });
        };
        applyIsControl(data);
        setCheckedKeys(updatedCheckedKeys);
        onChange(updatedCheckedKeys);
    };
    return (jsxRuntime.jsx(TreeSelect, { className: className, treeData: data, defaultSelectedRowKeys: checkedKeys, onChange: handleChange }));
};Object.defineProperty(exports,"FormProvider",{enumerable:true,get:()=>RCForm.FormProvider});exports.Accordion=Accordion;exports.AccordionBody=AccordionBody;exports.AccordionHeader=AccordionHeader;exports.Alert=Alert;exports.AlertDialog=AlertDialog;exports.AlertDialogAction=AlertDialogAction;exports.AlertDialogCancel=AlertDialogCancel;exports.AlertDialogContent=AlertDialogContent;exports.AlertDialogDescription=AlertDialogDescription;exports.AlertDialogFooter=AlertDialogFooter;exports.AlertDialogHeader=AlertDialogHeader;exports.AlertDialogOverlay=AlertDialogOverlay;exports.AlertDialogPortal=AlertDialogPortal;exports.AlertDialogTitle=AlertDialogTitle;exports.AlertDialogTrigger=AlertDialogTrigger;exports.AspectRatio=AspectRatio;exports.Badge=Badge;exports.BreadCrumb=BreadCrumb;exports.Button=Button;exports.Card=Card;exports.CardContent=CardContent;exports.CardDescription=CardDescription;exports.CardFooter=CardFooter;exports.CardHeader=CardHeader;exports.CardTitle=CardTitle;exports.Checkbox=Checkbox;exports.Collapsible=Collapsible;exports.CollapsibleContent=CollapsibleContent;exports.CollapsibleTrigger=CollapsibleTrigger;exports.Combobox=Combobox;exports.Command=Command;exports.CommandDialog=CommandDialog;exports.CommandEmpty=CommandEmpty;exports.CommandGroup=CommandGroup;exports.CommandInput=CommandInput;exports.CommandItem=CommandItem;exports.CommandList=CommandList;exports.CommandSeparator=CommandSeparator;exports.CommandShortcut=CommandShortcut;exports.Dialog=Dialog;exports.DialogClose=DialogClose;exports.DialogContent=DialogContent;exports.DialogDescription=DialogDescription;exports.DialogFooter=DialogFooter;exports.DialogHeader=DialogHeader;exports.DialogOverlay=DialogOverlay;exports.DialogPortal=DialogPortal;exports.DialogTitle=DialogTitle;exports.DialogTrigger=DialogTrigger;exports.DocumentEditor=index;exports.Drawer=Drawer;exports.DrawerClose=DrawerClose;exports.DrawerContent=DrawerContent;exports.DrawerDescription=DrawerDescription;exports.DrawerFooter=DrawerFooter;exports.DrawerHeader=DrawerHeader;exports.DrawerOverlay=DrawerOverlay;exports.DrawerPortal=DrawerPortal;exports.DrawerTitle=DrawerTitle;exports.DrawerTrigger=DrawerTrigger;exports.DropdownMenu=DropdownMenu;exports.DropdownMenuCheckboxItem=DropdownMenuCheckboxItem;exports.DropdownMenuContent=DropdownMenuContent;exports.DropdownMenuGroup=DropdownMenuGroup;exports.DropdownMenuItem=DropdownMenuItem;exports.DropdownMenuLabel=DropdownMenuLabel;exports.DropdownMenuPortal=DropdownMenuPortal;exports.DropdownMenuRadioGroup=DropdownMenuRadioGroup;exports.DropdownMenuRadioItem=DropdownMenuRadioItem;exports.DropdownMenuSeparator=DropdownMenuSeparator;exports.DropdownMenuShortcut=DropdownMenuShortcut;exports.DropdownMenuSub=DropdownMenuSub;exports.DropdownMenuSubContent=DropdownMenuSubContent;exports.DropdownMenuSubTrigger=DropdownMenuSubTrigger;exports.DropdownMenuTrigger=DropdownMenuTrigger;exports.DynamicElement=DynamicElement;exports.Empty=Empty;exports.Form=Form;exports.FormItem=FormItem;exports.GroupInput=GroupInput;exports.IDatePicker=IDatePicker;exports.IDateRangePicker=IDateRangePicker;exports.Input=Input;exports.InputNumber=InputNumber;exports.Menubar=Menubar;exports.MenubarCheckboxItem=MenubarCheckboxItem;exports.MenubarContent=MenubarContent;exports.MenubarGroup=MenubarGroup;exports.MenubarItem=MenubarItem;exports.MenubarLabel=MenubarLabel;exports.MenubarMenu=MenubarMenu;exports.MenubarPortal=MenubarPortal;exports.MenubarRadioGroup=MenubarRadioGroup;exports.MenubarRadioItem=MenubarRadioItem;exports.MenubarSeparator=MenubarSeparator;exports.MenubarShortcut=MenubarShortcut;exports.MenubarSub=MenubarSub;exports.MenubarSubContent=MenubarSubContent;exports.MenubarSubTrigger=MenubarSubTrigger;exports.MenubarTrigger=MenubarTrigger;exports.MultipleSelect=MultipleSelect;exports.MultipleSelectGroup=MultipleSelectGroup;exports.Pagination=Pagination;exports.Popover=Popover;exports.PopoverContent=PopoverContent;exports.PopoverTrigger=PopoverTrigger;exports.Progress=Progress;exports.REGEX_SNAKE_CASE=REGEX_SNAKE_CASE;exports.RadioGroup=RadioGroup;exports.RadioGroupItem=RadioGroupItem;exports.ScrollArea=ScrollArea;exports.ScrollBar=ScrollBar;exports.Select=Select;exports.SelectContent=SelectContent;exports.SelectGroup=SelectGroup;exports.SelectItem=SelectItem;exports.SelectLabel=SelectLabel;exports.SelectScrollDownButton=SelectScrollDownButton;exports.SelectScrollUpButton=SelectScrollUpButton;exports.SelectSeparator=SelectSeparator;exports.SelectTrigger=SelectTrigger;exports.SelectValue=SelectValue;exports.Separator=Separator;exports.Sheet=Sheet;exports.SheetClose=SheetClose;exports.SheetContent=SheetContent;exports.SheetDescription=SheetDescription;exports.SheetFooter=SheetFooter;exports.SheetHeader=SheetHeader;exports.SheetOverlay=SheetOverlay;exports.SheetPortal=SheetPortal;exports.SheetTitle=SheetTitle;exports.SheetTrigger=SheetTrigger;exports.Skeleton=Skeleton;exports.Spin=Spin;exports.Spinner=Spinner;exports.Switch=Switch;exports.Table=Table;exports.Tabs=Tabs;exports.TabsContent=TabsContent;exports.TabsList=TabsList;exports.TabsTrigger=TabsTrigger;exports.Toaster=Toaster;exports.Tooltip=Tooltip;exports.TooltipContent=TooltipContent;exports.TooltipProvider=TooltipProvider;exports.TooltipTrigger=TooltipTrigger;exports.TreeField=TreeField;exports.TreeSelect=TreeSelect;exports.badgeVariants=badgeVariants;exports.buttonVariants=buttonVariants;exports.cn=cn;exports.inputNumberVariants=inputNumberVariants;exports.inputVariants=inputVariants;exports.objectsToArray=objectsToArray;exports.objectsToString=objectsToString;exports.removeVietnameseTones=removeVietnameseTones;exports.spinnerVariants=spinnerVariants;exports.toLowerSnakeCase=toLowerSnakeCase;exports.toast=toast;exports.useAccordion=useAccordion;