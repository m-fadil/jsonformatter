import { useEffect, useRef } from "react";

import {
  createJSONEditor,
  type JSONEditorPropsOptional,
  type JsonEditor as VanillaJsonEditor,
} from "vanilla-jsoneditor";

type Props = JSONEditorPropsOptional & { className?: string };

const JSONEditor = ({ className, ...props }: Props) => {
  const refContainer = useRef<HTMLDivElement | null>(null);
  const refEditor = useRef<VanillaJsonEditor | null>(null);
  const refPrevProps = useRef<JSONEditorPropsOptional>(props);

  useEffect(() => {
    refEditor.current = createJSONEditor({
      target: refContainer.current as HTMLDivElement,
      props: refPrevProps.current,
    });

    return () => {
      refEditor.current?.destroy();
      refEditor.current = null;
    };
  }, []);

  // update props
  useEffect(() => {
    if (refEditor.current) {
      const changedProps = filterUnchangedProps(props, refPrevProps.current);
      refEditor.current.updateProps(changedProps);
      refPrevProps.current = props;
    }
  }, [props]);

  return <div ref={refContainer} className={className}></div>;
};

function filterUnchangedProps(
  props: JSONEditorPropsOptional,
  prevProps: JSONEditorPropsOptional
): JSONEditorPropsOptional {
  return Object.fromEntries(
    Object.entries(props).filter(
      ([key, value]) => value !== prevProps[key as keyof JSONEditorPropsOptional]
    )
  );
}

export default JSONEditor;
