$(function() {
    //ripple
    var btns = document.querySelectorAll('.mdc-button');
    for (var i = 0, btn; btn = btns[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(btn);
    }
    
    //dropdown
    let menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
    document.querySelector('.mdc-menu-anchor').addEventListener('click', () => menu.open = !menu.open);
    
    //tabs
    var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('.dynamic-tab-bar'));
    var panels = document.querySelector('.ed-home--panels');

    dynamicTabBar.preventDefaultOnClick = true;
    function updatePanel(index) {
        var activePanel = panels.querySelector('.ed-home--panels__panel.active');
        if (activePanel) {
            activePanel.classList.remove('active');
        }
        var newActivePanel = panels.querySelector('.ed-home--panels__panel:nth-child(' + (index + 1) + ')');
        if (newActivePanel) {
            newActivePanel.classList.add('active');
        }
    }
    dynamicTabBar.listen('MDCTabBar:change', function (t) {
        var dynamicTabBar = t.detail;
        var nthChildIndex = dynamicTabBar.activeTabIndex;
        updatePanel(nthChildIndex);
    });
    
    //flexible toolbar
    var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
    toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
    toolbar.listen('MDCToolbar:change', function(evt) {
        var flexibleExpansionRatio = evt.detail.flexibleExpansionRatio;
        console.log(flexibleExpansionRatio.toFixed(2));
    });
    
    //textfield
    var tfs = document.querySelectorAll('.mdc-text-field');
    for (var i = 0, tf; tf = tfs[i]; i++) {
        mdc.textField.MDCTextField.attachTo(tf);
    }
    
    //checkbox e provavelmente formfield
    [].forEach.call(document.querySelectorAll('.mdc-checkbox[data-js]'), function(checkbox) {
        var formField = checkbox.parentElement;
        var formFieldInstance = new mdc.formField.MDCFormField(formField);
        var checkboxInstance = new mdc.checkbox.MDCCheckbox(checkbox);
        formFieldInstance.input = checkboxInstance;
        
//        var row = formField.parentElement;
//        var indeterminateToggle = row.querySelector('.toggle-indeterminate');
//        if (indeterminateToggle) {
//            indeterminateToggle.addEventListener('click', function() {
//                checkboxInstance.indeterminate = !checkboxInstance.indeterminate;
//            });
//        }
//
//        var disabledToggle = row.querySelector('.toggle-disabled');
//        if (disabledToggle) {
//            disabledToggle.addEventListener('click', function() {
//                checkboxInstance.disabled = !checkboxInstance.disabled;
//            });
//        }
    });
    
    //select
    var sels = document.querySelectorAll('.mdc-select');
    for (var i = 0, sel; sel = sels[i]; i++) {
        mdc.select.MDCSelect.attachTo(sel);
    }
    
    //elevation on hover
    $('.mdc-card').hover(function(){
        $(this).toggleClass("mdc-elevation--z8");
    });
    
});

$(function () {
    //tabs
    var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar2'));
    var panels = document.querySelector('.ed-pedido--panels');

    dynamicTabBar.preventDefaultOnClick = true;
    function updatePanel(index) {
      var activePanel = panels.querySelector('.ed-pedido--panels__panel.active');
      if (activePanel) {
        activePanel.classList.remove('active');
      }
      var newActivePanel = panels.querySelector('.ed-pedido--panels__panel:nth-child(' + (index + 1) + ')');
      if (newActivePanel) {
        newActivePanel.classList.add('active');
      }
    }

    dynamicTabBar.listen('MDCTabBar:change', function (t) {
          var dynamicTabBar = t.detail;
          var nthChildIndex = dynamicTabBar.activeTabIndex;
      updatePanel(nthChildIndex);
    });
});