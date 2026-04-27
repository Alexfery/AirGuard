import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
  MatListModule
} from "./chunk-J7FLSUAP.js";
import {
  AirQualityCardComponent,
  SocketService
} from "./chunk-DOU2KZWP.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-H7P4TWSV.js";
import {
  MatChip,
  MatChipsModule,
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-3PCLPFYS.js";
import {
  RouterLink
} from "./chunk-FX7RJNGN.js";
import {
  CategoryScale,
  Chart,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  index,
  plugin_legend,
  plugin_tooltip
} from "./chunk-NYWKDNUV.js";
import {
  ApiService,
  MockDataService
} from "./chunk-YIY5OKNA.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-ZPASEQEY.js";
import {
  MatSnackBar
} from "./chunk-KLJMTQGD.js";
import {
  SelectionModel
} from "./chunk-UETAL3Z3.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from "./chunk-XTUMZNXX.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  Inject,
  InjectionToken,
  Input,
  InputFlags,
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconAnchor,
  MatIconModule,
  MatPseudoCheckbox,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgModule,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  forwardRef,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CUZ7VDK2.js";

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c0 = ["button"];
var _c1 = ["*"];
function MatButtonToggle_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function MatButtonToggle_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false
  };
}
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var uniqueIdCounter = 0;
var MatButtonToggleChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatButtonToggleGroup = class _MatButtonToggleGroup {
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  constructor(_changeDetector, defaultOptions) {
    this._changeDetector = _changeDetector;
    this._multiple = false;
    this._disabled = false;
    this._controlValueAccessorChangeFn = () => {
    };
    this._onTouched = () => {
    };
    this._name = `mat-button-toggle-group-${uniqueIdCounter++}`;
    this.valueChange = new EventEmitter();
    this.change = new EventEmitter();
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue));
    } else {
      this._clearSelection();
      this._selectValue(value);
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => toggle.checked = false);
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value) {
    const correspondingOption = this._buttonToggles.find((toggle) => {
      return toggle.value != null && toggle.value === value;
    });
    if (correspondingOption) {
      correspondingOption.checked = true;
      this._selectionModel.select(correspondingOption);
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
  static {
    this.\u0275fac = function MatButtonToggleGroup_Factory(t) {
      return new (t || _MatButtonToggleGroup)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatButtonToggleGroup,
      selectors: [["mat-button-toggle-group"]],
      contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
        }
      },
      hostAttrs: ["role", "group", 1, "mat-button-toggle-group"],
      hostVars: 5,
      hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-disabled", ctx.disabled);
          \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
        }
      },
      inputs: {
        appearance: "appearance",
        name: "name",
        vertical: [InputFlags.HasDecoratorInputTransform, "vertical", "vertical", booleanAttribute],
        value: "value",
        multiple: [InputFlags.HasDecoratorInputTransform, "multiple", "multiple", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
        hideSingleSelectionIndicator: [InputFlags.HasDecoratorInputTransform, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
        hideMultipleSelectionIndicator: [InputFlags.HasDecoratorInputTransform, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
      },
      outputs: {
        valueChange: "valueChange",
        change: "change"
      },
      exportAs: ["matButtonToggleGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: _MatButtonToggleGroup
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "role": "group",
        "class": "mat-button-toggle-group",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup",
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
    }]
  }], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatButtonToggle = class _MatButtonToggle {
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._checked = false;
    this.ariaLabelledby = null;
    this._disabled = false;
    this.change = new EventEmitter();
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || `mat-button-toggle-${uniqueIdCounter++}`;
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    const newChecked = this._isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this._isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  _isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
  static {
    this.\u0275fac = function MatButtonToggle_Factory(t) {
      return new (t || _MatButtonToggle)(\u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_GROUP, 8), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatButtonToggle,
      selectors: [["mat-button-toggle"]],
      viewQuery: function MatButtonToggle_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
        }
      },
      hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
      hostVars: 12,
      hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("focus", function MatButtonToggle_focus_HostBindingHandler() {
            return ctx.focus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
          \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
        }
      },
      inputs: {
        ariaLabel: [InputFlags.None, "aria-label", "ariaLabel"],
        ariaLabelledby: [InputFlags.None, "aria-labelledby", "ariaLabelledby"],
        id: "id",
        name: "name",
        value: "value",
        tabIndex: "tabIndex",
        disableRipple: [InputFlags.HasDecoratorInputTransform, "disableRipple", "disableRipple", booleanAttribute],
        appearance: "appearance",
        checked: [InputFlags.HasDecoratorInputTransform, "checked", "checked", booleanAttribute],
        disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matButtonToggle"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 11,
      consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-label-content"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
      template: function MatButtonToggle_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "button", 1, 0);
          \u0275\u0275listener("click", function MatButtonToggle_Template_button_click_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onButtonClick());
          });
          \u0275\u0275elementStart(2, "span", 2);
          \u0275\u0275template(3, MatButtonToggle_Conditional_3_Template, 1, 1, "mat-pseudo-checkbox", 3)(4, MatButtonToggle_Conditional_4_Template, 1, 1, "mat-pseudo-checkbox", 3);
          \u0275\u0275projection(5);
          \u0275\u0275elementEnd()();
          \u0275\u0275element(6, "span", 4)(7, "span", 5);
        }
        if (rf & 2) {
          const button_r3 = \u0275\u0275reference(1);
          \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled || null);
          \u0275\u0275attribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(3, ctx.buttonToggleGroup && ctx.checked && !ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(4, ctx.buttonToggleGroup && ctx.checked && ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator ? 4 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275property("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
        }
      },
      dependencies: [MatRipple, MatPseudoCheckbox],
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape);border:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-standard-button-toggle-selected-state-text-color )}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-legacy-button-toggle-selected-state-text-color )}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-legacy-button-toggle-disabled-state-text-color )}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color);background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font);font-size:var(--mat-standard-button-toggle-label-text-size);line-height:var(--mat-standard-button-toggle-label-text-line-height);font-weight:var(--mat-standard-button-toggle-label-text-weight);letter-spacing:var(--mat-standard-button-toggle-label-text-tracking)}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color);background-color:var(--mat-standard-button-toggle-selected-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-standard-button-toggle-disabled-selected-state-text-color )}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color)}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity)}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity)}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape);border-bottom-right-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape);border-bottom-left-radius:var(--mat-standard-button-toggle-shape)}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      standalone: true,
      imports: [MatRipple, MatPseudoCheckbox],
      template: '<button #button class="mat-button-toggle-button mat-focus-indicator"\n        type="button"\n        [id]="buttonId"\n        [attr.tabindex]="disabled ? -1 : tabIndex"\n        [attr.aria-pressed]="checked"\n        [disabled]="disabled || null"\n        [attr.name]="_getButtonName()"\n        [attr.aria-label]="ariaLabel"\n        [attr.aria-labelledby]="ariaLabelledby"\n        (click)="_onButtonClick()">\n  <span class="mat-button-toggle-label-content">\n    <!-- Render checkmark at the beginning for single-selection. -->\n    @if (buttonToggleGroup && checked && !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator) {\n      <mat-pseudo-checkbox\n          class="mat-mdc-option-pseudo-checkbox"\n          [disabled]="disabled"\n          state="checked"\n          aria-hidden="true"\n          appearance="minimal"></mat-pseudo-checkbox>\n    }\n    <!-- Render checkmark at the beginning for multiple-selection. -->\n    @if (buttonToggleGroup && checked && buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator) {\n      <mat-pseudo-checkbox\n          class="mat-mdc-option-pseudo-checkbox"\n          [disabled]="disabled"\n          state="checked"\n          aria-hidden="true"\n          appearance="minimal"></mat-pseudo-checkbox>\n    }\n    <ng-content></ng-content>\n  </span>\n</button>\n\n<span class="mat-button-toggle-focus-overlay"></span>\n<span class="mat-button-toggle-ripple" matRipple\n     [matRippleTrigger]="button"\n     [matRippleDisabled]="this.disableRipple || this.disabled">\n</span>\n',
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape);border:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-standard-button-toggle-selected-state-text-color )}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var( --mat-legacy-button-toggle-selected-state-text-color )}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-legacy-button-toggle-disabled-state-text-color )}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color);background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font);font-size:var(--mat-standard-button-toggle-label-text-size);line-height:var(--mat-standard-button-toggle-label-text-line-height);font-weight:var(--mat-standard-button-toggle-label-text-weight);letter-spacing:var(--mat-standard-button-toggle-label-text-tracking)}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color)}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color);background-color:var(--mat-standard-button-toggle-selected-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var( --mat-standard-button-toggle-disabled-selected-state-text-color )}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color)}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity)}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity)}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape);border-bottom-right-radius:var(--mat-standard-button-toggle-shape)}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape);border-bottom-left-radius:var(--mat-standard-button-toggle-shape)}"]
    }]
  }], () => [{
    type: MatButtonToggleGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_GROUP]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
    }]
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var MatButtonToggleModule = class _MatButtonToggleModule {
  static {
    this.\u0275fac = function MatButtonToggleModule_Factory(t) {
      return new (t || _MatButtonToggleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatButtonToggleModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/features/dashboard/live-chart/live-chart.component.ts
var _c02 = ["chartCanvas"];
var _forTrack0 = ($index, $item) => $item.key;
function LiveChartComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function LiveChartComponent_For_8_Template_button_click_0_listener() {
      const ds_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMetric(ds_r2.key));
    });
    \u0275\u0275element(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ds_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--ds-color", ds_r2.color);
    \u0275\u0275classProp("active", ctx_r2.isActive(ds_r2.key));
    \u0275\u0275property("matTooltip", ctx_r2.isActive(ds_r2.key) ? "Ascunde " + ds_r2.label : "Afi\u0219eaz\u0103 " + ds_r2.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ds_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ds_r2.label, " ");
  }
}
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, plugin_legend, plugin_tooltip, index);
var DATASETS = [
  { key: "co2", label: "CO\u2082 (ppm)", color: "#26c6da" },
  { key: "pm25", label: "PM2.5 (\u03BCg/m\xB3)", color: "#ff9800" },
  { key: "temperature", label: "Temperatur\u0103 (\xB0C)", color: "#4caf50" }
];
var LiveChartComponent = class _LiveChartComponent {
  constructor(socketService) {
    this.socketService = socketService;
    this.activeMetrics = signal(/* @__PURE__ */ new Set(["co2", "pm25", "temperature"]));
    this.datasetDefs = DATASETS;
    this.chart = null;
    this.sub = null;
    this.MAX_POINTS = 20;
    this.labels = [];
    this.dataBuffers = { co2: [], pm25: [], temperature: [] };
  }
  ngAfterViewInit() {
    this.initChart();
    this.sub = this.socketService.sensorData$.subscribe((data) => this.addPoint(data));
  }
  initChart() {
    const ctx = this.chartCanvasRef.nativeElement.getContext("2d");
    if (!ctx)
      return;
    this.chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this.labels,
        datasets: DATASETS.map((ds) => ({
          label: ds.label,
          data: this.dataBuffers[ds.key],
          borderColor: ds.color,
          backgroundColor: ds.color + "18",
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 3,
          pointHoverRadius: 5,
          fill: true
        }))
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 200 },
        interaction: { mode: "index", intersect: false },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#90a4ae", maxTicksLimit: 8, font: { size: 11 } }
          },
          y: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#90a4ae", font: { size: 11 } }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: "rgba(26,35,50,0.95)",
            titleColor: "#26c6da",
            bodyColor: "#e8eaf6",
            borderColor: "rgba(255,255,255,0.08)",
            borderWidth: 1,
            padding: 10
          }
        }
      }
    });
  }
  addPoint(data) {
    const time = new Date(data.timestamp).toLocaleTimeString("ro-RO", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    this.labels.push(time);
    this.dataBuffers["co2"].push(data.co2);
    this.dataBuffers["pm25"].push(data.pm25);
    this.dataBuffers["temperature"].push(data.temperature);
    if (this.labels.length > this.MAX_POINTS) {
      this.labels.shift();
      Object.values(this.dataBuffers).forEach((buf) => buf.shift());
    }
    this.chart?.update("none");
  }
  toggleMetric(key) {
    const current = new Set(this.activeMetrics());
    current.has(key) ? current.delete(key) : current.add(key);
    this.activeMetrics.set(current);
    const idx = DATASETS.findIndex((d) => d.key === key);
    if (idx !== -1 && this.chart) {
      this.chart.getDatasetMeta(idx).hidden = !current.has(key);
      this.chart.update();
    }
  }
  isActive(key) {
    return this.activeMetrics().has(key);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.chart?.destroy();
  }
  static {
    this.\u0275fac = function LiveChartComponent_Factory(t) {
      return new (t || _LiveChartComponent)(\u0275\u0275directiveInject(SocketService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LiveChartComponent, selectors: [["app-live-chart"]], viewQuery: function LiveChartComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartCanvasRef = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 0, consts: [["chartCanvas", ""], [1, "chart-card"], [1, "chart-toggles"], ["mat-stroked-button", "", 1, "toggle-btn", 3, "active", "--ds-color", "matTooltip"], [1, "chart-wrapper"], ["mat-stroked-button", "", 1, "toggle-btn", 3, "click", "matTooltip"], [1, "dot"]], template: function LiveChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card", 1)(1, "mat-card-header")(2, "mat-card-title")(3, "mat-icon");
        \u0275\u0275text(4, "show_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Date \xEEn timp real ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275repeaterCreate(7, LiveChartComponent_For_8_Template, 3, 8, "button", 3, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "mat-card-content")(10, "div", 4);
        \u0275\u0275element(11, "canvas", null, 0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.datasetDefs);
      }
    }, dependencies: [CommonModule, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButtonModule, MatButton, MatIconModule, MatIcon, MatButtonToggleModule, MatTooltipModule, MatTooltip], styles: ["\n\n.chart-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 16px 20px 8px;\n}\n.chart-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin: 0;\n}\n.chart-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 20px;\n}\n.chart-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 8px 20px 20px !important;\n}\n.chart-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 30px;\n  padding: 0 10px;\n  border-color: var(--border) !important;\n  color: var(--text-secondary) !important;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  border-color: var(--ds-color) !important;\n  color: var(--text-primary) !important;\n  background: rgba(from var(--ds-color) r g b/0.1) !important;\n}\n.toggle-btn[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.chart-wrapper[_ngcontent-%COMP%] {\n  height: 280px;\n  position: relative;\n}\n/*# sourceMappingURL=live-chart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LiveChartComponent, { className: "LiveChartComponent", filePath: "src/app/features/dashboard/live-chart/live-chart.component.ts", lineNumber: 40 });
})();

// src/app/features/dashboard/alerts-panel/alerts-panel.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _c03 = () => [1, 2, 3];
function AlertsPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.alerts.length);
  }
}
function AlertsPanelComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275element(3, "div", 6)(4, "div", 7);
    \u0275\u0275elementEnd()();
  }
}
function AlertsPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, AlertsPanelComponent_Conditional_8_For_2_Template, 5, 0, "div", 3, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c03));
  }
}
function AlertsPanelComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Nicio alert\u0103 activ\u0103");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "To\u021Bi parametrii sunt \xEEn limite normale");
    \u0275\u0275elementEnd()();
  }
}
function AlertsPanelComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item", 11)(1, "div", 12)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const alert_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("severity-" + alert_r2.severity);
    \u0275\u0275advance();
    \u0275\u0275classMap("icon-" + alert_r2.severity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r2.severity === "danger" ? "dangerous" : "warning");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r2.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alert_r2.deviceName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.relativeTime(alert_r2.timestamp));
  }
}
function AlertsPanelComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list", 9);
    \u0275\u0275repeaterCreate(1, AlertsPanelComponent_Conditional_10_For_2_Template, 11, 8, "mat-list-item", 10, _forTrack02);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.alerts);
  }
}
var AlertsPanelComponent = class _AlertsPanelComponent {
  constructor() {
    this.alerts = [];
    this.isLoading = false;
  }
  relativeTime(isoString) {
    const diff = Date.now() - new Date(isoString).getTime();
    const mins = Math.floor(diff / 6e4);
    if (mins < 1)
      return "acum";
    if (mins < 60)
      return `acum ${mins} min`;
    const hours = Math.floor(mins / 60);
    if (hours < 24)
      return `acum ${hours}h`;
    return `acum ${Math.floor(hours / 24)}z`;
  }
  static {
    this.\u0275fac = function AlertsPanelComponent_Factory(t) {
      return new (t || _AlertsPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertsPanelComponent, selectors: [["app-alerts-panel"]], inputs: { alerts: "alerts", isLoading: "isLoading" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "alerts-card"], [1, "alert-count-chip"], [1, "skeleton-list"], [1, "skeleton-item"], [1, "skeleton", "skeleton-dot"], [1, "skeleton-text"], [1, "skeleton", "skeleton-line", "long"], [1, "skeleton", "skeleton-line", "short"], [1, "empty-state"], [1, "alerts-list"], [1, "alert-item", 3, "class"], [1, "alert-item"], ["matListItemIcon", "", 1, "alert-icon-wrapper"], ["matListItemTitle", "", 1, "alert-message"], ["matListItemLine", "", 1, "alert-meta"], [1, "alert-device"], [1, "alert-time"]], template: function AlertsPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title")(3, "mat-icon");
        \u0275\u0275text(4, "notifications_active");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Alerte recente ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, AlertsPanelComponent_Conditional_6_Template, 2, 1, "mat-chip", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-card-content");
        \u0275\u0275template(8, AlertsPanelComponent_Conditional_8_Template, 3, 1, "div", 2)(9, AlertsPanelComponent_Conditional_9_Template, 7, 0)(10, AlertsPanelComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.alerts.length > 0 ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(8, ctx.isLoading ? 8 : ctx.alerts.length === 0 ? 9 : 10);
      }
    }, dependencies: [CommonModule, MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatIconModule, MatIcon, MatListModule, MatList, MatListItem, MatListItemIcon, MatListItemLine, MatListItemTitle, MatChipsModule, MatChip, MatButtonModule], styles: ["\n\n.alerts-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.alerts-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 20px 8px;\n}\n.alerts-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0;\n  flex: 1;\n}\n.alerts-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent-orange);\n  font-size: 20px;\n}\n.alerts-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 8px 0 0 !important;\n}\n.alert-count-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.15) !important;\n  color: var(--accent-orange) !important;\n  font-size: 12px;\n  height: 22px !important;\n  min-height: 22px !important;\n}\n.alerts-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.alerts-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  padding: 8px 20px;\n  height: auto !important;\n  min-height: 56px;\n}\n.alerts-list[_ngcontent-%COMP%]   .alert-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.alerts-list[_ngcontent-%COMP%]   .alert-item.severity-danger[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--accent-red);\n}\n.alerts-list[_ngcontent-%COMP%]   .alert-item.severity-warning[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--accent-orange);\n}\n.alert-icon-wrapper[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 12px 0 0;\n}\n.alert-icon-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.alert-icon-wrapper.icon-danger[_ngcontent-%COMP%] {\n  background: rgba(244, 67, 54, 0.15);\n  color: var(--accent-red);\n}\n.alert-icon-wrapper.icon-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.15);\n  color: var(--accent-orange);\n}\n.alert-message[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  color: var(--text-primary) !important;\n  white-space: normal !important;\n  line-height: 1.4;\n}\n.alert-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 11px !important;\n  color: var(--text-secondary) !important;\n  margin-top: 2px;\n}\n.alert-meta[_ngcontent-%COMP%]   .alert-device[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.alert-meta[_ngcontent-%COMP%]   .alert-time[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 20px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: var(--accent-green);\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.skeleton-list[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.skeleton-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.skeleton-item[_ngcontent-%COMP%]   .skeleton-dot[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.skeleton-item[_ngcontent-%COMP%]   .skeleton-text[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.skeleton-item[_ngcontent-%COMP%]   .skeleton-line[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 4px;\n}\n.skeleton-item[_ngcontent-%COMP%]   .skeleton-line.long[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.skeleton-item[_ngcontent-%COMP%]   .skeleton-line.short[_ngcontent-%COMP%] {\n  width: 40%;\n}\n/*# sourceMappingURL=alerts-panel.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertsPanelComponent, { className: "AlertsPanelComponent", filePath: "src/app/features/dashboard/alerts-panel/alerts-panel.component.ts", lineNumber: 17 });
})();

// src/app/features/dashboard/dashboard.component.ts
var _forTrack03 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
var _c04 = () => [1, 2, 3];
var _c12 = (a0) => ["/devices", a0];
function DashboardComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-air-quality-card", 6);
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", card_r1.title)("icon", card_r1.icon)("unit", card_r1.unit)("value", ctx_r1.getLatestValue(card_r1.key))("previousValue", ctx_r1.getPreviousValue(card_r1.key))("thresholds", card_r1.thresholds)("isLoading", ctx_r1.isLoadingMetrics());
  }
}
function DashboardComponent_Conditional_29_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 15);
    \u0275\u0275element(1, "div", 16)(2, "div", 17)(3, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DashboardComponent_Conditional_29_For_1_Template, 4, 0, "mat-card", 15, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c04));
  }
}
function DashboardComponent_Conditional_30_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span")(2, "mat-icon");
    \u0275\u0275text(3, "air");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " CO\u2082");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "span")(9, "mat-icon");
    \u0275\u0275text(10, "grain");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " PM2.5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 31)(15, "span")(16, "mat-icon");
    \u0275\u0275text(17, "thermostat");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " Temp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275classMap(r_r4.co2 > 1200 ? "status-danger" : r_r4.co2 > 800 ? "status-warning" : "status-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r4.co2, " ppm");
    \u0275\u0275advance(6);
    \u0275\u0275classMap(r_r4.pm25 > 35 ? "status-danger" : r_r4.pm25 > 12 ? "status-warning" : "status-ok");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", r_r4.pm25, " \u03BCg/m\xB3");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", r_r4.temperature, "\xB0C");
  }
}
function DashboardComponent_Conditional_30_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "mat-icon");
    \u0275\u0275text(2, "signal_disconnected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const device_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(device_r5.status === "offline" ? "Dispozitiv offline" : "A\u0219tept date...");
  }
}
function DashboardComponent_Conditional_30_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 19)(1, "div", 20)(2, "div", 21)(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 23)(6, "mat-icon");
    \u0275\u0275text(7, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "mat-divider");
    \u0275\u0275elementStart(11, "div", 25);
    \u0275\u0275template(12, DashboardComponent_Conditional_30_For_1_Conditional_12_Template, 21, 7)(13, DashboardComponent_Conditional_30_For_1_Conditional_13_Template, 5, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 26)(15, "div", 27)(16, "mat-icon", 28);
    \u0275\u0275text(17, "sensor_window");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Fereastr\u0103");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-slide-toggle", 29);
    \u0275\u0275listener("change", function DashboardComponent_Conditional_30_For_1_Template_mat_slide_toggle_change_20_listener() {
      const device_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleWindow(device_r5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "a", 30)(22, "mat-icon");
    \u0275\u0275text(23, "open_in_new");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const device_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(device_r5.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", device_r5.location, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(device_r5.status === "online" ? "dot-online" : "dot-offline");
    \u0275\u0275property("matTooltip", device_r5.status === "online" ? "Online" : "Offline");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(12, (tmp_15_0 = ctx_r1.latestReadings()[device_r5.id]) ? 12 : 13, tmp_15_0);
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", device_r5.windowOpen)("disabled", device_r5.status === "offline")("matTooltip", device_r5.windowOpen ? "Fereastr\u0103 deschis\u0103 \u2014 apas\u0103 pentru a \xEEnchide" : "Fereastr\u0103 \xEEnchis\u0103 \u2014 apas\u0103 pentru a deschide");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c12, device_r5.id));
  }
}
function DashboardComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DashboardComponent_Conditional_30_For_1_Template, 24, 12, "mat-card", 19, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.devices());
  }
}
var METRIC_CARDS = [
  {
    title: "CO\u2082",
    icon: "air",
    unit: "ppm",
    key: "co2",
    thresholds: { warningMin: 800, dangerMin: 1200 }
  },
  {
    title: "PM2.5",
    icon: "grain",
    unit: "\u03BCg/m\xB3",
    key: "pm25",
    thresholds: { warningMin: 12, dangerMin: 35 }
  },
  {
    title: "Temperatur\u0103",
    icon: "thermostat",
    unit: "\xB0C",
    key: "temperature",
    thresholds: { warningMin: 26, dangerMin: 30 }
  },
  {
    title: "Umiditate",
    icon: "water_drop",
    unit: "%",
    key: "humidity",
    thresholds: { warningMin: 60, dangerMin: 70 }
  }
];
var DashboardComponent = class _DashboardComponent {
  constructor(socketService, apiService, mockDataService, snackBar) {
    this.socketService = socketService;
    this.apiService = apiService;
    this.mockDataService = mockDataService;
    this.snackBar = snackBar;
    this.metricCards = METRIC_CARDS;
    this.isLoadingMetrics = signal(true);
    this.isLoadingDevices = signal(true);
    this.latestReadings = signal({});
    this.previousReadings = signal({});
    this.devices = signal([]);
    this.alerts = signal([]);
    this.aggregatedLatest = computed(() => {
      const readings = Object.values(this.latestReadings());
      if (!readings.length)
        return null;
      return readings.reduce((acc, cur) => new Date(cur.timestamp) > new Date(acc.timestamp) ? cur : acc);
    });
    this.aggregatedPrevious = computed(() => {
      const readings = Object.values(this.previousReadings());
      if (!readings.length)
        return null;
      return readings.reduce((acc, cur) => new Date(cur.timestamp) > new Date(acc.timestamp) ? cur : acc);
    });
    this.sub = null;
  }
  ngOnInit() {
    this.loadDevices();
    this.sub = this.socketService.sensorData$.subscribe((data) => {
      const prev = this.latestReadings()[data.deviceId];
      if (prev) {
        this.previousReadings.update((r) => __spreadProps(__spreadValues({}, r), { [data.deviceId]: prev }));
      }
      this.latestReadings.update((r) => __spreadProps(__spreadValues({}, r), { [data.deviceId]: data }));
      this.isLoadingMetrics.set(false);
      this.updateAlerts();
    });
  }
  loadDevices() {
    this.apiService.getDevices().subscribe({
      next: (devices) => {
        this.devices.set(devices);
        this.isLoadingDevices.set(false);
        this.updateAlerts();
      },
      error: () => {
        this.isLoadingDevices.set(false);
      }
    });
  }
  updateAlerts() {
    const devicesWithReadings = this.devices().map((d) => {
      const r = this.latestReadings()[d.id];
      return r ? __spreadValues(__spreadValues({}, d), r) : d;
    });
    this.alerts.set(this.mockDataService.generateAlerts(devicesWithReadings));
  }
  getLatestValue(key) {
    const data = this.aggregatedLatest();
    if (!data)
      return null;
    return data[key];
  }
  getPreviousValue(key) {
    const data = this.aggregatedPrevious();
    if (!data)
      return null;
    return data[key];
  }
  toggleWindow(device) {
    const newState = !device.windowOpen;
    this.apiService.updateDevice(device.id, { windowOpen: newState }).subscribe(() => {
      this.devices.update((list) => list.map((d) => d.id === device.id ? __spreadProps(__spreadValues({}, d), { windowOpen: newState }) : d));
      const label = newState ? "deschis\u0103" : "\xEEnchis\u0103";
      this.snackBar.open(`Fereastra ${device.name} a fost ${label}`, "OK", { duration: 3e3 });
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(SocketService), \u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(MockDataService), \u0275\u0275directiveInject(MatSnackBar));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 3, consts: [[1, "page-container", "fade-in"], [1, "page-header"], [1, "page-title"], [1, "header-meta"], [1, "last-update"], [1, "metrics-grid"], [3, "title", "icon", "unit", "value", "previousValue", "thresholds", "isLoading"], [1, "chart-alerts-row"], [1, "chart-col"], [1, "alerts-col"], [3, "alerts", "isLoading"], [1, "devices-section"], [1, "section-title"], ["mat-button", "", "color", "primary", "routerLink", "/devices", 1, "see-all-btn"], [1, "devices-grid"], [1, "device-card", "loading"], [1, "skeleton", "skeleton-device-title"], [1, "skeleton", "skeleton-device-row"], [1, "skeleton", "skeleton-device-row", "short"], [1, "device-card", "fade-in"], [1, "device-card-header"], [1, "device-title-block"], [1, "device-name"], [1, "device-location"], [1, "device-status-dot", 3, "matTooltip"], [1, "device-sensors"], [1, "device-footer"], [1, "window-control"], [1, "window-icon"], ["color", "primary", 3, "change", "checked", "disabled", "matTooltip"], ["mat-icon-button", "", "matTooltip", "Detalii dispozitiv", 3, "routerLink"], [1, "sensor-row"], [1, "no-data"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "mat-icon");
        \u0275\u0275text(4, "dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " Dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 3)(7, "span", 4)(8, "mat-icon");
        \u0275\u0275text(9, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Actualizare automat\u0103 la 3s ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "section", 5);
        \u0275\u0275repeaterCreate(12, DashboardComponent_For_13_Template, 1, 7, "app-air-quality-card", 6, _forTrack03);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "section", 7)(15, "div", 8);
        \u0275\u0275element(16, "app-live-chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275element(18, "app-alerts-panel", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "section", 11)(20, "h2", 12)(21, "mat-icon");
        \u0275\u0275text(22, "device_hub");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Dispozitive ");
        \u0275\u0275elementStart(24, "a", 13);
        \u0275\u0275text(25, " Vezi toate ");
        \u0275\u0275elementStart(26, "mat-icon");
        \u0275\u0275text(27, "arrow_forward");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 14);
        \u0275\u0275template(29, DashboardComponent_Conditional_29_Template, 2, 1)(30, DashboardComponent_Conditional_30_Template, 2, 0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275repeater(ctx.metricCards);
        \u0275\u0275advance(6);
        \u0275\u0275property("alerts", ctx.alerts())("isLoading", ctx.isLoadingDevices());
        \u0275\u0275advance(11);
        \u0275\u0275conditional(29, ctx.isLoadingDevices() ? 29 : 30);
      }
    }, dependencies: [
      CommonModule,
      RouterLink,
      MatCardModule,
      MatCard,
      MatButtonModule,
      MatAnchor,
      MatIconAnchor,
      MatIconModule,
      MatIcon,
      MatChipsModule,
      MatTooltipModule,
      MatTooltip,
      MatDividerModule,
      MatDivider,
      MatSlideToggleModule,
      MatSlideToggle,
      AirQualityCardComponent,
      LiveChartComponent,
      AlertsPanelComponent
    ], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.page-header[_ngcontent-%COMP%]   .header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.page-header[_ngcontent-%COMP%]   .header-meta[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.page-header[_ngcontent-%COMP%]   .header-meta[_ngcontent-%COMP%]   .last-update[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1100px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.chart-alerts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1000px) {\n  .chart-alerts-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.chart-alerts-row[_ngcontent-%COMP%]   .chart-col[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.chart-alerts-row[_ngcontent-%COMP%]   .alerts-col[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.devices-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin: 0 0 16px;\n}\n.devices-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.devices-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .see-all-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.devices-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   .see-all-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.devices-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1100px) {\n  .devices-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 700px) {\n  .devices-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.device-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.device-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.device-card.loading[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  min-height: 160px;\n}\n.device-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px 16px 12px;\n}\n.device-card-header[_ngcontent-%COMP%]   .device-title-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.device-card-header[_ngcontent-%COMP%]   .device-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.device-card-header[_ngcontent-%COMP%]   .device-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.device-card-header[_ngcontent-%COMP%]   .device-location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 12px;\n  height: 12px;\n}\n.device-status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n.device-status-dot.dot-online[_ngcontent-%COMP%] {\n  background: var(--accent-green);\n  box-shadow: 0 0 8px var(--accent-green);\n  animation: pulse 2.5s infinite;\n}\n.device-status-dot.dot-offline[_ngcontent-%COMP%] {\n  background: var(--text-secondary);\n}\n.device-sensors[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n}\n.device-sensors[_ngcontent-%COMP%]   .sensor-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 0;\n  font-size: 13px;\n}\n.device-sensors[_ngcontent-%COMP%]   .sensor-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-secondary);\n}\n.device-sensors[_ngcontent-%COMP%]   .sensor-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.device-sensors[_ngcontent-%COMP%]   .sensor-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.device-sensors[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--text-secondary);\n  font-size: 13px;\n  padding: 8px 0;\n}\n.device-sensors[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.device-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 16px 8px;\n  border-top: 1px solid var(--border);\n  background: rgba(255, 255, 255, 0.02);\n}\n.device-footer[_ngcontent-%COMP%]   .window-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--text-secondary);\n}\n.device-footer[_ngcontent-%COMP%]   .window-control[_ngcontent-%COMP%]   .window-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.skeleton-device-title[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 70%;\n  border-radius: 4px;\n}\n.skeleton-device-row[_ngcontent-%COMP%] {\n  height: 14px;\n  width: 90%;\n  border-radius: 4px;\n}\n.skeleton-device-row.short[_ngcontent-%COMP%] {\n  width: 60%;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 72 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-QL7RQ45H.js.map
