/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/custom_name.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
var foo = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(foo, twig.Template);

/**
 * @inheritDoc
 */
foo.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
foo.prototype.render_ = function(sb, context, blocks) {
    // line 2
    sb.append("Hello!");
};

/**
 * @inheritDoc
 */
foo.prototype.getTemplateName = function() {
    return "foo";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
foo.prototype.isTraitable = function() {
    return false;
};
