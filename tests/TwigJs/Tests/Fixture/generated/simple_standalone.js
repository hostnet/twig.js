/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/simple_standalone.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
var simple_standalone = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(simple_standalone, twig.Template);

/**
 * @inheritDoc
 */
simple_standalone.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
simple_standalone.prototype.render_ = function(sb, context, blocks) {
    // line 1
    sb.append("This is a simple template.<br \/><br \/>\n\n");
    // line 3
    if ((("getName" in context) || ("name" in context))) {
        // line 4
        sb.append("Hello ");
        sb.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, twig.attrsimple(context, "name")), "html", null, true));
        sb.append("!\n");
    } else {
        // line 6
        sb.append("Hello World!\n");
    }
};

/**
 * @inheritDoc
 */
simple_standalone.prototype.getTemplateName = function() {
    return "simple_standalone";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
simple_standalone.prototype.isTraitable = function() {
    return false;
};
